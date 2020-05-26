#!/usr/bin/env python3

import json
import string
import sys
from pathlib import Path
import subprocess

from bs4 import BeautifulSoup

js_file_with_special_cases = Path("background.js")

py26_docs = Path("python-2.6.9-docs-html")
py27_docs = Path("python-2.7.18-docs-html")
py3_docs = Path("python-3.8.3-docs-html")

dirs = [py26_docs, py27_docs, py3_docs]
urls = [
    "http://docs.python.org/ftp/python/doc/2.6.9/python-2.6.9-docs-html.zip",
    "https://docs.python.org/2/archives/python-2.7.18-docs-html.zip",
    "https://docs.python.org/3/archives/python-3.8.3-docs-html.zip",
]

# HTML ids of non-documentation elements
useless_ids = {"outdated-warning", "searchlabel", "searchbox", "documentation_options"}

for directory, url in zip(dirs, urls):
    if not directory.is_dir():
        zip_file = directory.parent / (directory.name + ".zip")
        if not zip_file.exists():
            # print(f"Downloading {url} ...", file=sys.stderr)
            subprocess.run(["wget", url])
        # print(f"Unzipping {zip_file} ...", file=sys.stderr)
        subprocess.run(["unzip", zip_file])


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
python2_files = {str(p.relative_to(py27_docs)) for p in py27_docs.rglob("*.html")}
python3_files = {str(p.relative_to(py3_docs)) for p in py3_docs.rglob("*.html")}
deleted_files = (python2_files - python3_files) - moved_files
# print('deleted html files:', sorted(deleted_files), file=sys.stderr)


def find_all_links(root):
    """finds all elements with id's in all the .html files of a directory
    
    All elements that have id's should be all the linkable elements on a page."""
    links = []
    for html_file in root.rglob("*.html"):
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


old_links = set(find_all_links(py27_docs))
# old_links |= set(find_all_links(py26_docs))
new_links = set(find_all_links(py3_docs))
missing_links = list(old_links - new_links)


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


if __name__ == "__main__":
    for link in sorted(missing_links):
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
                param.startswith("id")
                and all(c in string.digits for c in param[len("id") :])
                # and path != "library/functions.html"
            ):
                continue
            # Python 2.6 docs
            if param.startswith("index-") and all(
                c in string.digits for c in param[len("index-") :]
            ):
                continue
            # Check if changing the path using one of the cases produces a
            # working redirect
            if path in cases and cases[path] is not None:
                if cases[path] + "#" + param in new_links:
                    continue

        print(link)
