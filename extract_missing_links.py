#!/usr/bin/env python3

import difflib
import json
import string
import subprocess
import sys
import tempfile
from pathlib import Path

from bs4 import BeautifulSoup

js_file_with_special_cases = Path("background.js")

# The old python version docs extract to a directory like `html-2.0.1`
# and some to something else, but we rename those to be like the new
# documentation for consistency
py20_docs = Path("python-2.0.1-docs-html")
py21_docs = Path("python-2.1.3-docs-html")
py22_docs = Path("python-2.2.3-docs-html")
py23_docs = Path("python-2.3.5-docs-html")
py24_docs = Path("python-2.4.4-docs-html")
py25_docs = Path("python-2.5.4-docs-html")
py26_docs = Path("python-2.6.9-docs-html")
py27_docs = Path("python-2.7.18-docs-html")

py2_docs = py27_docs
py3_docs = Path("python-3.8.3-docs-html")

urls = {
    py20_docs: "https://www.python.org/ftp/python/doc/2.0.1/html-2.0.1.zip",
    py21_docs: "https://www.python.org/ftp/python/doc/2.1.3/html-2.1.3.zip",
    py22_docs: "https://www.python.org/ftp/python/doc/2.2.3/html-2.2.3.zip",
    py23_docs: "https://www.python.org/ftp/python/doc/2.3.5/html-2.3.5.zip",
    py24_docs: "https://www.python.org/ftp/python/doc/2.4.4/html-2.4.4.zip",
    py25_docs: "https://www.python.org/ftp/python/doc/2.5.4/html-2.5.4.zip",
    py26_docs: "http://docs.python.org/ftp/python/doc/2.6.9/python-2.6.9-docs-html.zip",
    py27_docs: "https://docs.python.org/2/archives/python-2.7.18-docs-html.zip",
    py3_docs: "https://docs.python.org/3/archives/python-3.8.3-docs-html.zip",
}

# HTML ids of non-documentation elements
useless_ids = {
    "outdated-warning",
    "searchlabel",
    "searchbox",
    "documentation_options",
    # Python 2.5
    "top-navigation-panel",
}

for directory, url in urls.items():
    if not directory.is_dir():
        zip_file = directory.parent / (directory.name + ".zip")
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
            temp_path.rename(directory)


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
                relevant_lines.append(line.replace("'", '"'))
    # remove trailing comma
    relevant_lines = "\n".join(relevant_lines).rstrip(",")
    # print(relevant_lines, file=sys.stderr)
    cases = json.loads("{" + relevant_lines + "}")
    # print(json.dumps(cases, indent=4), file=sys.stderr)
    return cases


with open(js_file_with_special_cases) as f:
    cases = read_cases(f.read())

moved_files = {c for c, r in cases.items() if ("#" not in c) and (r is not None)}
python2_files = {str(p.relative_to(py2_docs)) for p in py2_docs.rglob("*.html")}
python3_files = {str(p.relative_to(py3_docs)) for p in py3_docs.rglob("*.html")}
# deleted_files = (python2_files - python3_files) - moved_files
deleted_files = []
# print('deleted html files:', sorted(deleted_files), file=sys.stderr)


def find_all_links(root):
    """finds all elements with id's in all the .html files of a directory

    All elements that have id's should be all the linkable elements on a page."""
    links = []
    for html_file in sorted(
        root.rglob("*.html"), key=lambda x: str(x.relative_to(root))
    ):
        html_file_relative = str(html_file.relative_to(root))
        # We can link to just the page
        links.append(html_file_relative)
        with open(html_file) as f:
            soup = BeautifulSoup(f, "html.parser")
            ids = [tag["id"] for tag in soup.select("[id]")]
            for _id in ids:
                link = f"{html_file_relative}#{_id}"
                # print(link, file=sys.stderr)
                links.append(link)
    return links


old_links = find_all_links(py2_docs)
# old_links_set = set(old_links)
# old_links += [l for l in find_all_links(py26_docs) if l not in old_links_set]
new_links = set(find_all_links(py3_docs))
missing_links = [l for l in old_links if l not in new_links]
old_links = set(old_links)


# Check that the special cases in the extension point to real ids
for old, redirect in cases.items():
    if old not in old_links:
        print("old link doesn't exist:", file=sys.stderr)
        print("   ", old, "->", file=sys.stderr)
        print("   ", redirect, file=sys.stderr)
    if redirect is not None and redirect not in new_links:
        print("redirect target doesn't exist:", file=sys.stderr)
        print("   ", old, "->", file=sys.stderr)
        print("   ", redirect, file=sys.stderr)


def starts_with_followed_by_numbers(s, prefix):
    return s.startswith(prefix) and all(
        c in string.digits for c in param[len(prefix) :]
    )


if __name__ == "__main__":
    prev_redirect = None
    for link_index, link in enumerate(missing_links):
        print(f"{link_index+1}/{len(missing_links)}", file=sys.stderr)
        link = link.strip()
        if link in cases:
            continue

        if "#" in link:
            path, param = link.split("#")
        else:
            path, param = link, None

        if path in deleted_files:
            continue

        if param is not None:
            if param in useless_ids:
                continue
            if (
                starts_with_followed_by_numbers(param, "id")
                # and path != "library/functions.html"
            ):
                continue
            # Python 2.6 docs
            if starts_with_followed_by_numbers(param, "index-"):
                continue
            # Python 2.5 docs
            if starts_with_followed_by_numbers(param, "rfcref-"):
                continue

            # Check if changing the path using one of the cases produces a
            # working redirect
            if path in cases and cases[path] is not None:
                if cases[path] + "#" + param in new_links:
                    continue

        # print(link)
        filename = link.split("#")[0]
        redirect = cases.get(filename, filename)
        if redirect != prev_redirect:
            prev_redirect = redirect
            print()
            print(f"        // https://docs.python.org/3/{redirect}")
            # print()
        print(f"        // https://docs.python.org/2/{link}")
        # print()
        # for match in difflib.get_close_matches(link, new_links):
        #     print(f"        // https://docs.python.org/3/{match}")
        #     print(f"        // '{link}': '{match}',")
        print(f"        '{link}': null,")
        print()
    # old_links
    # for link in old_links:
    #     if '#' in link: continue
