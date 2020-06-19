#!/usr/bin/env python3

import difflib
import itertools
import json
import re
import string
import subprocess
import sys
import tempfile
from pathlib import Path
from urllib.parse import urljoin, urlparse

from bs4 import BeautifulSoup

NEW_VERSION = "3.8"
OLD_VERSION = "2.7"

PYTHON2_VERSIONS = ["2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"]

JS_FILE_WITH_SPECIAL_CASES = Path("background.js")
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
    "3.8": "https://docs.python.org/3/archives/python-3.8.3-docs-html.zip",
}
# The encoding was changed from Windows-1252 in Python 2.5
ENCODING_CHANGED_VERSION = "2.5"

# HTML ids of non-documentation elements
USELESS_IDS = {
    "outdated-warning",
    "searchlabel",
    "searchbox",
    "documentation_options",
    "searchbox",
    "searchlabel",
    # Python 2.5
    "top-navigation-panel",
}


def version_to_dir(version):
    return Path(f"python-{version}-docs-html")


for version, url in ARCHIVE_URLS.items():
    output_dir = version_to_dir(version)
    if not output_dir.is_dir():
        zip_file = output_dir.parent / (output_dir.name + ".zip")
        if not zip_file.exists():
            # print(f"Downloading {url} ...", file=sys.stderr)
            subprocess.run(["wget", url, "-O", zip_file])
        # Some of the zip files extract as a bunch of files, others extract as
        # a single directory containing the files. So extract to a temporary
        # and then check if it only contains a single directory and move
        # either the temp directory or the directory *inside* the temp directory
        # back to the current directory.
        # print(f"Unzipping {zip_file} ...", file=sys.stderr)
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir) / "python_docs"
            subprocess.run(["unzip", "-d", temp_path, zip_file])
            unzipped_contents = list(temp_path.iterdir())
            if len(unzipped_contents) == 1:
                temp_path = unzipped_contents[0]
            temp_path.rename(output_dir)


def read_cases(js):
    """reads the list of special cases from the extension's javascript source code

    by reading the all non-empty, non-comment lines between the first line containing
    the word "SPECIAL_CASES" and the first line containing "  };" and reading that
    as a JSON file.
    """
    relevant_lines = []
    collect_lines = False
    for line in js.splitlines():
        if "SPECIAL_CASES" in line:
            collect_lines = True
        elif collect_lines:
            if "  };" in line:
                break
            if line.strip() and not line.strip().startswith("//"):
                # JSON uses double quotes, the extension JS uses single quotes
                relevant_lines.append(line.replace("'", '"'))
    # remove trailing comma
    relevant_lines = "\n".join(relevant_lines).rstrip(",")
    # print(relevant_lines, file=sys.stderr)
    cases = json.loads("{" + relevant_lines + "}")
    # print(json.dumps(cases, indent=4), file=sys.stderr)
    return cases


with open(JS_FILE_WITH_SPECIAL_CASES) as f:
    cases = read_cases(f.read())

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
            links[html_file_relative] = [
                tag["href"] for tag in soup.find_all(href=True)
            ]
    return linkable, links


docs = {}
existing_links = {}
for version, url in ARCHIVE_URLS.items():
    path = version_to_dir(version)

    # Cache linkable and links as JSON, because this takes a while.
    versioned_output_directory = OUTPUT_DIRECTORY / version
    linkable_file = versioned_output_directory / "linkable.json"
    links_file = versioned_output_directory / "links.json"

    versioned_output_directory.mkdir(parents=True, exist_ok=True)
    if not all(f.is_file() for f in [linkable_file, links_file]):
        print("extracting links from", version_to_dir(version), file=sys.stderr)
        linkable, links = find_all_linkable(path, version)
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
        flat_linkable.append(filename)
        flat_linkable += ids

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


def has_redirect(link, special_cases, new_links):
    """Uses a list of special cases to check if the link can be mapped to new_links
    or is explicitly special cased as having no redirect, or is in a file that has been 
    special cased as having no redirect.
    
    useless links are also reported as having a working redirect"""
    # TODO: we're really interested in this function in the extension, not this
    link = link.strip()
    if link in special_cases or link in new_links:
        return True
    if "#" in link:
        path, frag = link.split("#")
    else:
        path, frag = link, None

    if frag is not None:
        if frag in USELESS_IDS:
            return True
        if re.match("id[0-9]+", frag) is not None:
            return True
        # Python 2.6 docs
        if re.match("index-[0-9]+", frag) is not None:
            return True
        # Python 2.5 docs
        if re.match("rfcref-[0-9]+", frag) is not None:
            return True

        if path in special_cases:
            # File was deleted, all other links should break
            if special_cases[path] is None:
                return True
            # Check if changing the path using one of the cases produces a
            # working redirect
            if special_cases[path] + "#" + frag in new_links:
                return True

    return False


need_special_case = {}
missing = {}
special_cased = {}

new_links = set(docs[NEW_VERSION])
for version in PYTHON2_VERSIONS:
    need_special_case[version] = [l for l in docs[version] if l not in new_links]
    missing[version] = []
    special_cased[version] = []

    for link_index, link in enumerate(need_special_case[version]):
        if has_redirect(link, cases, new_links):
            special_cased[version].append(link)
        else:
            # print(f"// https://docs.python.org/2/{link}")
            # for match in difflib.get_close_matches(link, new_links):
            #     print(f"// https://docs.python.org/3/{match}")
            #     print(f"// '{link}': '{match}',")
            # print(f"'{link}': null,)
            # print()
            missing[version].append(link)

# Only print a link in the last minor version it appeared in
for cur_version, next_version in zip(PYTHON2_VERSIONS, PYTHON2_VERSIONS[1:]):
    next_minor_version_links = set(docs[next_version])
    missing[cur_version] = [
        l for l in missing[cur_version] if l not in next_minor_version_links
    ]

with open(OUTPUT_DIRECTORY / "special_cased.json", "w") as f:
    json.dump(special_cased, f, indent=4)
with open(OUTPUT_DIRECTORY / "missing.json", "w") as f:
    json.dump(missing, f, indent=4)
with open(OUTPUT_DIRECTORY / "existing.json", "w") as f:
    json.dump(existing_links, f, indent=4)


# Check that the special cases in the extension point to real ids
old_links = set(itertools.chain.from_iterable(docs[v] for v in PYTHON2_VERSIONS))
for old, redirect in cases.items():
    if old not in old_links:
        print("old link doesn't exist:", file=sys.stderr)
        print("   ", old, "->", file=sys.stderr)
        print("       ", redirect, file=sys.stderr)
    if redirect is not None and redirect not in new_links:
        print("redirect target doesn't exist:", file=sys.stderr)
        print("   ", old, "->", file=sys.stderr)
        print("       ", redirect, file=sys.stderr)


# print(f"        '{link}': null,")
# print()
