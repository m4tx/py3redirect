#!/usr/bin/env python3

import difflib
import itertools
import json
import re
import shutil
import string
import subprocess
import sys
import tempfile
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin, urlparse
from urllib.request import urlopen
from zipfile import ZipFile

from bs4 import BeautifulSoup

NEW_VERSION = "3.9"
OLD_VERSION = "2.7"

PYTHON2_VERSIONS = ["2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"]

JS_FILE_WITH_SPECIAL_CASES = "./special-cases.js"  # has to have leading "./"
if not Path(JS_FILE_WITH_SPECIAL_CASES).is_file():
    raise SystemExit(f"Couldn't find file {JS_FILE_WITH_SPECIAL_CASES}")
DOWNLOAD_DOCS_TO = Path("docs.python.org")
OUTPUT_DIRECTORY = Path("links")

ARCHIVE_URLS = {
    "2.0": "https://www.python.org/ftp/python/doc/2.0.1/html-2.0.1.zip",
    "2.1": "https://www.python.org/ftp/python/doc/2.1.3/html-2.1.3.zip",
    "2.2": "https://www.python.org/ftp/python/doc/2.2.3/html-2.2.3.zip",
    "2.3": "https://www.python.org/ftp/python/doc/2.3.5/html-2.3.5.zip",
    "2.4": "https://www.python.org/ftp/python/doc/2.4.4/html-2.4.4.zip",
    "2.5": "https://www.python.org/ftp/python/doc/2.5.4/html-2.5.4.zip",
    "2.6": "http://docs.python.org/ftp/python/doc/2.6.9/python-2.6.9-docs-html.zip",
    "2.7": "https://docs.python.org/2/archives/python-2.7.18-docs-html.zip",
    "3.9": "https://docs.python.org/3/archives/python-3.9.4-docs-html.zip",
}
# The encoding was changed from Windows-1252 in Python 2.5
ENCODING_CHANGED_VERSION = "2.5"

# HTML ids of non-documentation elements
USELESS_IDS = {
    "documentation_options",
    "outdated-warning",
    "searchlabel",
    "searchbox",
    # Python 2.5
    "top-navigation-panel",
}


def version_to_dir(version):
    return DOWNLOAD_DOCS_TO / ("3" if version == NEW_VERSION else version)


# Download a local copy of the documentation to ./docs.python.org/{version}/
for version, url in ARCHIVE_URLS.items():
    output_dir = version_to_dir(version)
    if output_dir.is_dir():
        continue

    DOWNLOAD_DOCS_TO.mkdir(parents=True, exist_ok=True)
    zip_file = output_dir.parent / (output_dir.name + ".zip")
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir) / "python_docs"
        # print(f"Downloading {url} to {temp_path}", file=sys.stderr)
        with urlopen(url) as f:
            with ZipFile(BytesIO(f.read())) as docs_zip:
                docs_zip.extractall(path=temp_path)

        # Some archives extract to a single directory, the older ones don't
        unzipped_contents = list(temp_path.iterdir())
        if len(unzipped_contents) == 1:
            temp_path = unzipped_contents[0]
        shutil.move(temp_path, output_dir)

cases = json.loads(
    subprocess.run(
        [
            "node",
            "-e",
            f"console.log(JSON.stringify(require('{JS_FILE_WITH_SPECIAL_CASES}')))",
        ],
        capture_output=True,
    ).stdout
)

# moved_files = {c for c, r in cases.items() if ("#" not in c) and (r is not None)}
# python2_files = {str(p.relative_to(docs["2"])) for p in docs["2"].rglob("*.html")}
# python3_files = {str(p.relative_to(docs["3"])) for p in docs["3"].rglob("*.html")}
# deleted_files = (python2_files - python3_files) - moved_files
deleted_files = []
# print('deleted html files:', sorted(deleted_files), file=sys.stderr)


def find_all_linkable(root, version=None):
    """finds all links and elements with id's in all the .html files of a directory

    All elements that have id's should be all the linkable elements on a page.
    
    returns two dictionaries 
    - linkable: maps html filenames to a list of relative urls that can be linked to 
    on that page (based on which elements have id= set)
    - links: maps html filenames to a list of links (this is just for reference)

    version is used because the encoding used to be windows-1251 before Python 2.5
    """
    encoding = None
    if version is not None and version < ENCODING_CHANGED_VERSION:
        encoding = "windows-1252"

    links = {}
    linkable = {}
    for html_file in sorted(root.rglob("*.html")):
        html_file_relative = str(html_file.relative_to(root))
        with open(html_file, encoding=encoding) as f:
            soup = BeautifulSoup(f, "html.parser")
            ids = [tag["id"] for tag in soup.select("[id]")]
            linkable[html_file_relative] = [
                f"{html_file_relative}#{_id}" for _id in ids
            ]
            if (
                not html_file_relative.startswith("genindex")
                and "whatsnew" not in html_file_relative
                and "modindex" not in html_file_relative
            ):
                links[html_file_relative] = [
                    tag["href"] for tag in soup.find_all(href=True)
                ]
    return linkable, links


docs = {}
existing_links = {}
for version, url in reversed(ARCHIVE_URLS.items()):
    # Cache linkable and links as JSON, because this takes a while.
    versioned_output_directory = OUTPUT_DIRECTORY / version
    linkable_file = versioned_output_directory / "linkable.json"
    links_file = versioned_output_directory / "links.json"

    versioned_output_directory.mkdir(parents=True, exist_ok=True)
    if not all(f.is_file() for f in [linkable_file, links_file]):
        print(
            "extracting links from",
            version_to_dir(version),
            "to",
            versioned_output_directory,
            file=sys.stderr,
        )
        linkable, links = find_all_linkable(version_to_dir(version), version)
        with open(linkable_file, "w") as f:
            json.dump(linkable, f, indent=4)
        with open(links_file, "w") as f:
            json.dump(links, f, indent=4)
    else:
        with open(linkable_file) as f:
            linkable = json.load(f)
        with open(links_file) as f:
            links = json.load(f)

    flat_linkable = []
    for filename, ids in linkable.items():
        # The file itself can be linked to
        flat_linkable += [filename, *ids]

    useful_links = {}
    for filename, links_in_file in links.items():
        useful_links[filename] = []
        for orig_url in links_in_file:
            url = urlparse(orig_url)
            if (
                url.scheme == ""
                and url.netloc == ""
                and url.params == ""
                and url.query == ""
                and url.path != "."
                and url.path != "./"
                and not url.path.endswith(".png")
                and not url.path.endswith(".css")
            ):
                normalized_link = urljoin(filename, orig_url)
                useful_links[filename].append(normalized_link)

    docs[version] = flat_linkable
    existing_links[version] = useful_links


def starts_with_followed_by_numbers(s, prefix):
    """Whether the string s starts with prefix followed by zero or more numbers"""
    return s.startswith(prefix) and all(c in string.digits for c in s[len(prefix) :])


def is_impractical(path, frag):
    if frag is not None:
        if re.match("id[0-9]+", frag) is not None:
            return "#id[0-9]+ (id can't be redirected without minor version)"
        if re.match("index-[0-9]+", frag) is not None:
            return "#index-[0-9]+ (id can't be redirected without minor version)"
        # Python 2.5 docs and below
        if re.match("l2h-[0-9]+", frag) is not None:
            # TODO: are these safe to redirect or do they change meaning between versions?
            return "#l2h-[0-9]+ (id can't be redirected without minor version)"
        if re.match("rfcref-[0-9]+", frag) is not None:
            # TODO: are these safe to redirect
            return "#rfcref-[0-9]+"

    # These node<some number>.html files in the <2.6 docs can point to different sections
    # between minor versions.
    if re.match(r"node[0-9]+\.html", path.split("/")[-1]) is not None:
        return r"node[0-9]+\.html (filename can't be redirected without minor version)"


def is_useless(path, frag):
    """Returns True if the link is a useless link that doesn't or can't be maintained"""
    if path.startswith("modindex.html"):
        return "module index"

    if frag is not None:
        if frag in USELESS_IDS:
            return f"#{frag}"
    #
    # Don't redirect the indeces
    if path.endswith("genindex.html"):
        return "genindex.html (useless filename)"

    return False


def has_redirect(link, special_cases, new_links):
    """Uses a list of special cases to check if the link can be mapped to new_links
    or is explicitly special cased as having no redirect, or is in a file that has been 
    special cased as having no redirect."""
    path, fragment = link.split("#") if "#" in link else (link, "")
    if fragment:
        fragment = "#" + fragment

    # TODO: we're really interested in this function in the extension, not Python
    if link in special_cases:
        return special_cases[link] is None or special_cases[link] in new_links

    if path in special_cases:
        if special_cases[path] is None:
            return True
        if "#" in special_cases[path]:
            return special_cases[path] in new_links
        return (special_cases[path] + fragment) in new_links

    return False


need_special_case = {}
useless = {}
impractical = {}
still_missing = {}
special_cased = {}

new_links = set(docs[NEW_VERSION])
for version in PYTHON2_VERSIONS:
    need_special_case[version] = [l for l in docs[version] if l not in new_links]

    useless[version] = {}
    impractical[version] = {}
    special_cased[version] = []
    still_missing[version] = []

    for link_index, link in enumerate(need_special_case[version]):

        if "#" in link:
            path, frag = link.split("#")
        else:
            path, frag = link, None

        if has_redirect(link, cases, new_links):
            special_cased[version].append(link)
        elif (useless_status := is_useless(path, frag)) :
            useless[version][useless_status] = (
                useless[version].get(useless_status, 0) + 1
            )
        elif (impractical_status := is_impractical(path, frag)):
            impractical[version][impractical_status] = (
                impractical[version].get(impractical_status, 0) + 1
            )
        else:
            # print(f"// https://docs.python.org/{version}/{link}")
            # for match in difflib.get_close_matches(link, new_links):
            #     print(f"// https://docs.python.org/3/{match}")
            #     print(f'// "{link}": "{match}",')
            # print(f'"{link}": null,')
            # print()
            still_missing[version].append(link)


# Only print a link in the last minor version it appeared in
in_next_version = {}
for cur_version, next_version in zip(PYTHON2_VERSIONS, PYTHON2_VERSIONS[1:]):
    next_minor_version_links = set(docs[next_version])
    new_still_missing = []
    in_next_version[cur_version] = []
    for l in still_missing[cur_version]:
        if l in next_minor_version_links:
            in_next_version[cur_version].append(l)
        else:
            new_still_missing.append(l)
    still_missing[cur_version] = new_still_missing
in_next_version[PYTHON2_VERSIONS[-1]] = []


def format_loading_percent(f, ndigits=0):
    """format .0001 as "<1%" instead of 0%"""
    limit = 10 ** -(ndigits + 2)
    if limit > f > 0:
        return f"<{limit:.{ndigits}%}"
    if 1 > f > (1 - limit):
        return f">{1 - limit:.{ndigits}%}"
    return f"{f:.{ndigits}%}"

# Print some stats
for version in PYTHON2_VERSIONS:
    total_links = len(docs[version])
    missing_from_newest_version = len(need_special_case[version])
    missing_files = {x for x in need_special_case[version] if "#" not in x}
    missing_in_existing_files = []
    for m in need_special_case[version]:
        if m not in missing_files and m.split("#")[0] not in missing_files:
            missing_in_existing_files.append(m)
    useless_count = sum(useless[version].values())
    impractical_count = sum(impractical[version].values())
    special_cased_count = len(special_cased[version])
    todo_count = len(still_missing[version])

    in_next_version_count = len(in_next_version[version])

    print(f"{version} has {total_links} links total:")
    print(
        f"  {missing_from_newest_version} missing from Python {NEW_VERSION}",
        f"({format_loading_percent(missing_from_newest_version / total_links)})",
        f"({len(missing_files)} are files)",
        f"({len(missing_in_existing_files)} are not in the missing files)",
    )
    print(
        f"  - {useless_count} useless",
        f"({format_loading_percent(useless_count / missing_from_newest_version)})",
    )
    for reason in sorted(useless[version]):
        print(f"    {useless[version][reason]: <4}: {reason}")
    print(
        f"  - {impractical_count} impractical",
        f"({format_loading_percent(impractical_count / missing_from_newest_version)})",
    )
    for reason in sorted(impractical[version]):
        print(f"    {impractical[version][reason]: <4}: {reason}")
    print(
        f"  - {special_cased_count} special cased",
        f"({format_loading_percent(special_cased_count/ missing_from_newest_version)})",
    )
    print(
        f"  - {in_next_version_count} not special cased but are in the next Python version",
        f"({format_loading_percent(in_next_version_count / missing_from_newest_version)})",
    )
    print(
        f"  {todo_count} still need a redirect",
        f"({format_loading_percent(todo_count / missing_from_newest_version, ndigits=1)})",
    )

with open(OUTPUT_DIRECTORY / "special_cased.json", "w") as f:
    json.dump(special_cased, f, indent=4)
with open(OUTPUT_DIRECTORY / "still_missing.json", "w") as f:
    json.dump(still_missing, f, indent=4)
with open(OUTPUT_DIRECTORY / "existing.json", "w") as f:
    json.dump(existing_links, f, indent=4)


# Check that the special cases in the extension point to real ids
old_links = set(itertools.chain.from_iterable(docs[v] for v in PYTHON2_VERSIONS))
for old, redirect in cases.items():
    if old not in old_links:
        print("old link doesn't exist:", file=sys.stderr)
        print("   ", old, "->", file=sys.stderr)
        print("   ", redirect, file=sys.stderr)
    if redirect is not None and redirect not in new_links:
        print("redirect target doesn't exist:", file=sys.stderr)
        print("   ", old, "->", file=sys.stderr)
        print("   ", redirect, file=sys.stderr)
