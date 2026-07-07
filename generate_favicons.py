from PIL import Image, ImageDraw, ImageFont

# Brand colors
MINT = (75, 225, 195)   # #4BE1C3
WHITE = (255, 255, 255)

# Output folder
OUTPUT = "./public/"

# Load a font
try:
    FONT = ImageFont.truetype("arialbd.ttf", 180)
except:
    FONT = ImageFont.load_default()

def generate_icon(size, filename):
    """Generate a square mint icon with centered white TMT text."""
    img = Image.new("RGB", (size, size), MINT)
    draw = ImageDraw.Draw(img)

    text = "TMT"

    # Modern Pillow text measurement
    bbox = FONT.getbbox(text)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]

    draw.text(((size - w) / 2, (size - h) / 2), text, fill=WHITE, font=FONT)

    img.save(OUTPUT + filename)
    print(f"Generated {filename}")

# Generate PNG icons
generate_icon(16,  "favicon-16-bold.png")
generate_icon(32,  "favicon-32-bold.png")
generate_icon(180, "apple-touch-icon.png")
generate_icon(192, "icon-192.png")
generate_icon(512, "icon-512.png")

# Generate ICO (multi-resolution)
ico_img = Image.new("RGB", (256, 256), MINT)
draw = ImageDraw.Draw(ico_img)
text = "TMT"

bbox = FONT.getbbox(text)
w = bbox[2] - bbox[0]
h = bbox[3] - bbox[1]

draw.text(((256 - w) / 2, (256 - h) / 2), text, fill=WHITE, font=FONT)

ico_img.save(OUTPUT + "favicon.ico", sizes=[(16,16), (32,32), (48,48), (64,64), (128,128), (256,256)])
print("Generated favicon.ico")

# Generate SVG manually
svg_content = f"""
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
  <rect width="512" height="512" fill="#4BE1C3"/>
  <text x="50%" y="50%" font-size="180" font-family="Arial" font-weight="bold"
        fill="white" text-anchor="middle" dominant-baseline="central">TMT</text>
</svg>
"""

with open(OUTPUT + "favicon-tmt-bold.svg", "w") as f:
    f.write(svg_content)

print("Generated favicon-tmt-bold.svg")

