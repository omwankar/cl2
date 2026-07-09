from PIL import Image
import os

base = os.path.join(os.path.dirname(__file__), '..', 'public')
base = os.path.abspath(base)
src = Image.open(os.path.join(base, 'favicon.png')).convert('RGBA')

sizes = [(16, 16), (32, 32), (48, 48)]
ico_images = [src.resize(s, Image.Resampling.LANCZOS) for s in sizes]
ico_path = os.path.join(base, 'favicon.ico')
ico_images[0].save(ico_path, format='ICO', sizes=sizes)
print('wrote favicon.ico', os.path.getsize(ico_path))

for size, name in [
    (32, 'favicon-32x32.png'),
    (16, 'favicon-16x16.png'),
    (192, 'icon-192.png'),
    (512, 'icon-512.png'),
]:
    out = src.resize((size, size), Image.Resampling.LANCZOS)
    path = os.path.join(base, name)
    out.save(path, format='PNG', optimize=True)
    print('wrote', name, os.path.getsize(path))

apple = src.resize((180, 180), Image.Resampling.LANCZOS)
apple_path = os.path.join(base, 'apple-icon.png')
apple.save(apple_path, format='PNG', optimize=True)
print('wrote apple-icon.png', apple.size, os.path.getsize(apple_path))

svg = """<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Clarusto Logistics">
  <rect width="64" height="64" rx="12" fill="#0A0D12"/>
  <g transform="translate(10,8)">
    <rect x="0" y="0" width="12" height="48" fill="#1E4D8C"/>
    <rect x="14" y="0" width="12" height="48" fill="#F5B800"/>
    <rect x="28" y="0" width="12" height="48" fill="#E11D2E"/>
  </g>
</svg>
"""
with open(os.path.join(base, 'icon.svg'), 'w', encoding='utf-8') as f:
    f.write(svg)
print('wrote icon.svg')

with open(ico_path, 'rb') as f:
    print('ico magic', f.read(4).hex())
