import re, pathlib
text = pathlib.Path(r"C:\Users\vaibh\OneDrive\Desktop\New folder\tuf\cl2\lib\page-seo.ts").read_text(encoding="utf-8")
for label, items in [("title", re.findall(r"title: '([^']+)'", text)), ("desc", re.findall(r"description:\s*\n\s*'([^']+)'", text))]:
    for i, v in enumerate(items):
        ok = (50 <= len(v) <= 59) if label == "title" else (150 <= len(v) <= 159)
        print(f"{label} {i+1}: {len(v)} {'OK' if ok else 'BAD'}")
