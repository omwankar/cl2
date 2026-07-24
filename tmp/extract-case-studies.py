import sys
import os
import re
from zipfile import ZipFile, BadZipFile
from xml.etree import ElementTree as ET

sys.stdout.reconfigure(encoding="utf-8")

docs = [
    r"c:\Users\vaibh\Downloads\Reine Of AL Masana Water and Sewage.docx",
    r"c:\Users\vaibh\Downloads\Dry Food Cutom Clearance.docx",
    r"c:\Users\vaibh\Downloads\Behu Custom Clearance Delivery (1).docx",
    r"c:\Users\vaibh\Downloads\Behu Custom Clearance Delivery.docx",
    r"c:\Users\vaibh\Downloads\Empty Plastic Bottle Supply.docx",
    r"c:\Users\vaibh\Downloads\EXW terms for Inland UK Transportation.docx",
    r"c:\Users\vaibh\Downloads\Custom Clearance- King Abdullah Port.docx",
    r"c:\Users\vaibh\Downloads\Empty Plastic Bottle Supply (1).docx",
    r"c:\Users\vaibh\Downloads\Delivery at Dammam.docx",
]

ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
out_base = r"C:\Users\vaibh\OneDrive\Desktop\New folder\tuf\cl2\tmp\case-studies"
img_base = r"C:\Users\vaibh\OneDrive\Desktop\New folder\tuf\cl2\public\projects"
os.makedirs(out_base, exist_ok=True)
os.makedirs(img_base, exist_ok=True)

for docx in docs:
    name = os.path.basename(docx)
    print("=" * 80)
    print("FILE:", name)
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower().replace(".docx", "")).strip("-")
    text_dir = os.path.join(out_base, slug)
    os.makedirs(text_dir, exist_ok=True)
    try:
        with ZipFile(docx) as z:
            media = [n for n in z.namelist() if n.startswith("word/media/")]
            print("MEDIA COUNT:", len(media))
            for i, m in enumerate(media, 1):
                ext = os.path.splitext(m)[1].lower() or ".bin"
                fname = f"{slug}-img{i}{ext}"
                dest = os.path.join(img_base, fname)
                with z.open(m) as src, open(dest, "wb") as dst:
                    dst.write(src.read())
                print("  saved", fname, os.path.getsize(dest))
            xml = z.read("word/document.xml")
            root = ET.fromstring(xml)
            paras = []
            for p in root.findall(".//w:p", ns):
                texts = [t.text or "" for t in p.findall(".//w:t", ns)]
                line = "".join(texts).strip()
                if line:
                    paras.append(line)
            with open(os.path.join(text_dir, "extract.txt"), "w", encoding="utf-8") as f:
                f.write("\n".join(paras))
            print("PARAS:", len(paras))
            for i, line in enumerate(paras, 1):
                print(f"{i}: {line}")
    except Exception as e:
        print("ERROR:", type(e).__name__, e)
