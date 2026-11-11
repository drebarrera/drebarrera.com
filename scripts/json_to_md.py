#!/usr/bin/env python3
"""Convert portfolio JSON entries into GitHub-ready case study folders.
Usage: python3 scripts/json_to_md.py
"""
import json, os, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "case-studies")
IMG = os.path.join(ROOT, "public", "images", "featured")
TOOLS = json.load(open(os.path.join(ROOT, "data", "tools.json")))

# (json file, identifier, output folder, label for the "role" field, include hero image)
JOBS = [
    ("featuredprojects", "swiftsend", "swiftsend", "Organization", True),
    ("featuredwork", "ev-systems", "ev-systems-architecture", "Role", True),
    ("featuredwork", "chkm8", "chkm8-mobile-app", "Role", False),
    ("featuredprojects", "shotglass", "shotglass-jobs", "Role", False),
]

# Small text fixes: dash artifacts, typos, and layout references that no longer apply.
FIXES = {
    "at scale-internally and externally-without relying": "at scale (internally and externally) without relying",
    "reputation-critical for": "reputation, which is critical for",
    "affordability-offering": "affordability, offering",
    "delivery logs-all from": "delivery logs, all from",
    "real time-tracking": "real time, tracking",
    "SwiftSend v2-one that": "SwiftSend v2, one that",
    "The image to the left shows": "The image above shows",
    "recieve": "receive",
    "Millenial": "Millennial",
    "puts them the centerpiece": "puts them at the center",
    "Beagle Bone": "BeagleBone",
    "persistant": "persistent",
}

def fix(s):
    for a, b in FIXES.items():
        s = s.replace(a, b)
    return s

def tool_link(name):
    url = TOOLS.get(name, {}).get("url", "")
    return f"[{name}]({url})" if url else name

def build(entry, role_label, hero, folder):
    ident = entry["identifier"]
    src = os.path.join(IMG, ident)
    dst = os.path.join(OUT, folder, "images")
    os.makedirs(dst, exist_ok=True)
    for name in ["capture", "challenge", "solution", "result"]:
        f = os.path.join(src, name + ".webp")
        if os.path.exists(f) and (name != "capture" or hero):
            shutil.copy(f, dst)

    L = [f"# {entry['title']}", "", f"> {entry['description']}", ""]
    if hero:
        L += [f"![{entry['title']}](images/capture.webp)", ""]
    L += ["| | |", "|---|---|", f"| **{role_label}** | {entry['role'].replace(' | ', ' / ')} |", f"| **Location** | {entry['location']} |"]
    L += ["| **Tools** | " + " · ".join(tool_link(t) for t in entry["tools"]) + " |"]
    w = entry.get("website")
    if w:
        if isinstance(w, str):
            L += [f"| **Links** | [{w.replace('https://', '')}]({w}) |"]
        else:
            links = []
            for n, u in w.items():
                if u.startswith("/"):
                    u = "./" + os.path.basename(u)
                links.append(f"[{n}]({u})")
            L += ["| **Links** | " + " · ".join(links) + " |"]
    L += [""]
    sections = [("Premise", "premise", None), ("Challenge", "challenge", "challenge"),
                ("Solution", "solution", "solution"),
                ("Design and Development Choices", "choices", None), ("Result", "result", "result")]
    for title, key, img in sections:
        if not entry.get(key):
            continue
        L += [f"## {title}", "", fix(entry[key]), ""]
        if img and os.path.exists(os.path.join(dst, img + ".webp")):
            L += [f"![{title}](images/{img}.webp)", ""]
    path = os.path.join(OUT, folder, "README.md")
    open(path, "w").write("\n".join(L).rstrip() + "\n")
    return path

for jf, ident, folder, label, hero in JOBS:
    data = json.load(open(os.path.join(ROOT, "data", jf + ".json")))
    entry = next(e for e in data if e["identifier"] == ident)
    print("wrote", build(entry, label, hero, folder))

# ChkM8 brand assessment PDF referenced by the entry
pdf = os.path.join(ROOT, "public", "chkm8_brand_assessment.pdf")
if os.path.exists(pdf):
    shutil.copy(pdf, os.path.join(OUT, "chkm8-mobile-app"))
    print("copied brand assessment PDF")
