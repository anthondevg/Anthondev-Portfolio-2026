from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter
from rembg import new_session, remove


ROOT = Path(__file__).resolve().parents[2]
SOURCE = Path(
    r"C:\Users\Antonio\AppData\Local\Temp\codex-clipboard-5c1886af-1bf6-47a5-bcc3-f279a7194a0d.jpg"
)
OUT_DIR = ROOT / "output"
WORK_DIR = ROOT / "tmp" / "profile-photo"
FINAL_PNG = OUT_DIR / "anthony-gonzalez-linkedin-profile-local.png"
FINAL_JPG = OUT_DIR / "anthony-gonzalez-linkedin-profile-local.jpg"
PREVIEW = WORK_DIR / "linkedin-circle-preview.png"

SIZE = 1200


def hex_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def mix(a: tuple[int, int, int], b: tuple[int, int, int], t: float):
    return tuple(round(a[i] * (1 - t) + b[i] * t) for i in range(3))


def radial_background() -> Image.Image:
    base_left = np.array(hex_rgb("#100621"), dtype=np.float32)
    base_right = np.array(hex_rgb("#08070d"), dtype=np.float32)
    violet = np.array(hex_rgb("#7047ff"), dtype=np.float32)
    plum = np.array(hex_rgb("#25121f"), dtype=np.float32)

    yy, xx = np.mgrid[0:SIZE, 0:SIZE].astype(np.float32)
    horizontal = (xx / (SIZE - 1))[..., None]
    image = base_left * (1 - horizontal) + base_right * horizontal

    distance = np.sqrt(((xx - 850) / 690) ** 2 + ((yy - 360) / 610) ** 2)
    glow = np.clip(1 - distance, 0, 1) ** 2.15
    image = image * (1 - glow[..., None] * 0.44) + violet * glow[..., None] * 0.44

    distance_plum = np.sqrt(((xx - 1130) / 500) ** 2 + ((yy - 1080) / 500) ** 2)
    warm = np.clip(1 - distance_plum, 0, 1) ** 2
    image = image * (1 - warm[..., None] * 0.22) + plum * warm[..., None] * 0.22

    vignette_distance = np.sqrt(((xx - 600) / 800) ** 2 + ((yy - 560) / 760) ** 2)
    vignette = np.clip((vignette_distance - 0.42) / 0.78, 0, 1)
    image *= (1 - vignette[..., None] * 0.30)

    return Image.fromarray(np.clip(image, 0, 255).astype(np.uint8), "RGB").convert("RGBA")


def add_observatory_mesh(background: Image.Image) -> Image.Image:
    mesh = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(mesh)

    # A restrained bent grid, matching the portfolio banner without competing with the face.
    for index in range(10):
        x = 785 + index * 58
        points = []
        for y in range(-80, 1281, 18):
            bend = int(34 * np.sin((y / 1200) * np.pi - 0.45) + (y - 600) * 0.055)
            points.append((x + bend, y))
        draw.line(points, fill=(168, 140, 255, 24), width=2)

    for index in range(12):
        y = 100 + index * 76
        points = []
        for x in range(715, 1281, 16):
            curve = int(34 * np.sin((x - 700) / 500 * np.pi) - (x - 960) * 0.04)
            points.append((x, y + curve))
        draw.line(points, fill=(240, 236, 245, 18), width=2)

    draw.ellipse((1018, 198, 1032, 212), fill=(168, 140, 255, 125))
    draw.ellipse((1002, 182, 1048, 228), outline=(168, 140, 255, 28), width=2)
    mesh = mesh.filter(ImageFilter.GaussianBlur(0.35))
    return Image.alpha_composite(background, mesh)


def gradient_fill(mask: Image.Image, top: str, bottom: str) -> Image.Image:
    top_rgb = np.array(hex_rgb(top), dtype=np.float32)
    bottom_rgb = np.array(hex_rgb(bottom), dtype=np.float32)
    t = np.linspace(0, 1, SIZE, dtype=np.float32)[:, None, None]
    rgb = top_rgb[None, None, :] * (1 - t) + bottom_rgb[None, None, :] * t
    rgb = np.repeat(rgb, SIZE, axis=1)
    alpha = np.asarray(mask, dtype=np.uint8)[..., None]
    rgba = np.concatenate([rgb.astype(np.uint8), alpha], axis=2)
    return Image.fromarray(rgba, "RGBA")


def build_suit() -> Image.Image:
    layer = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))

    body_mask = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(body_mask)
    draw.polygon(
        [
            (25, 1200),
            (80, 1060),
            (190, 930),
            (345, 850),
            (470, 825),
            (600, 875),
            (730, 825),
            (865, 850),
            (1030, 930),
            (1130, 1060),
            (1190, 1200),
        ],
        fill=255,
    )
    body_mask = body_mask.filter(ImageFilter.GaussianBlur(1.0))
    layer = Image.alpha_composite(layer, gradient_fill(body_mask, "#253451", "#101725"))

    shirt_mask = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(shirt_mask)
    draw.polygon([(485, 820), (600, 875), (720, 820), (808, 1200), (390, 1200)], fill=255)
    shirt_mask = shirt_mask.filter(ImageFilter.GaussianBlur(0.8))
    layer = Image.alpha_composite(layer, gradient_fill(shirt_mask, "#f1f0f4", "#bfc4cf"))

    draw = ImageDraw.Draw(layer, "RGBA")
    # Deep navy lapels with understated tailoring lines.
    draw.polygon(
        [(175, 930), (350, 850), (485, 820), (600, 923), (486, 1105), (350, 1200), (70, 1200)],
        fill=(22, 33, 54, 255),
    )
    draw.polygon(
        [(720, 820), (600, 923), (718, 1105), (855, 1200), (1130, 1200), (1030, 930), (860, 850)],
        fill=(19, 29, 48, 255),
    )
    draw.line([(485, 820), (600, 923), (486, 1105)], fill=(125, 139, 171, 84), width=4)
    draw.line([(720, 820), (600, 923), (718, 1105)], fill=(125, 139, 171, 74), width=4)
    draw.line([(600, 923), (600, 1200)], fill=(84, 91, 108, 54), width=3)

    # Natural shirt collar placed where the original neck meets the constructed jacket.
    draw.polygon([(472, 817), (548, 844), (600, 913), (500, 875)], fill=(244, 243, 247, 255))
    draw.polygon([(728, 817), (652, 844), (600, 913), (700, 875)], fill=(231, 232, 238, 255))
    draw.line([(472, 817), (600, 913), (728, 817)], fill=(174, 179, 192, 92), width=3)

    # Subtle textile grain keeps the vector-built clothing from looking flat at full resolution.
    noise = np.random.default_rng(17).normal(0, 3.0, (SIZE, SIZE, 1))
    suit_array = np.asarray(layer).astype(np.int16)
    suit_array[..., :3] = np.clip(suit_array[..., :3] + noise, 0, 255)
    return Image.fromarray(suit_array.astype(np.uint8), "RGBA").filter(ImageFilter.GaussianBlur(0.25))


def subject_head() -> tuple[Image.Image, Image.Image]:
    original = Image.open(SOURCE).convert("RGB")
    crop = original.crop((110, 650, 1260, 1800)).resize((SIZE, SIZE), Image.Resampling.LANCZOS)

    # Local semantic segmentation. This downloads an open-source ONNX model once and uses no API.
    session = new_session("u2net_human_seg")
    cutout = remove(crop, session=session, alpha_matting=False, post_process_mask=True).convert("RGBA")
    foreground_alpha = cutout.getchannel("A")

    head_shape = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(head_shape)
    draw.polygon(
        [
            (306, 225),
            (338, 145),
            (430, 82),
            (585, 68),
            (735, 110),
            (825, 225),
            (854, 375),
            (825, 535),
            (770, 670),
            (704, 770),
            (684, 850),
            (515, 850),
            (492, 770),
            (420, 700),
            (350, 590),
            (308, 430),
        ],
        fill=255,
    )
    head_shape = head_shape.filter(ImageFilter.GaussianBlur(3.2))

    alpha_np = np.minimum(np.asarray(foreground_alpha), np.asarray(head_shape)).astype(np.uint8)
    alpha = Image.fromarray(alpha_np, "L")

    # Gentle editorial correction: retain real skin texture and identity.
    corrected = ImageEnhance.Brightness(crop).enhance(1.035)
    corrected = ImageEnhance.Contrast(corrected).enhance(1.045)
    corrected = ImageEnhance.Color(corrected).enhance(0.94)
    corrected = ImageEnhance.Sharpness(corrected).enhance(1.10)
    corrected = corrected.convert("RGBA")
    corrected.putalpha(alpha)
    return corrected, alpha


def add_finish(image: Image.Image) -> Image.Image:
    array = np.asarray(image.convert("RGB")).astype(np.float32)
    rng = np.random.default_rng(24)
    grain = rng.normal(0, 1.35, array.shape[:2])[..., None]
    array = np.clip(array + grain, 0, 255).astype(np.uint8)
    return Image.fromarray(array, "RGB")


def build() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    WORK_DIR.mkdir(parents=True, exist_ok=True)

    background = add_observatory_mesh(radial_background())
    suit = build_suit()
    head, alpha = subject_head()

    # A soft grounding shadow separates the subject from the ultraviolet atmosphere.
    shadow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    shadow_alpha = alpha.filter(ImageFilter.GaussianBlur(30)).point(lambda p: round(p * 0.48))
    shadow.putalpha(shadow_alpha)
    shifted_shadow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    shifted_shadow.alpha_composite(shadow, (15, 24))

    composite = Image.alpha_composite(background, shifted_shadow)
    composite = Image.alpha_composite(composite, suit)
    composite = Image.alpha_composite(composite, head)

    final = add_finish(composite)
    final.save(FINAL_PNG, format="PNG", optimize=True)
    final.save(FINAL_JPG, format="JPEG", quality=94, optimize=True, progressive=True)

    # LinkedIn display simulation: circular crop on a neutral field.
    preview_size = 720
    preview_source = final.resize((preview_size, preview_size), Image.Resampling.LANCZOS)
    circle = Image.new("L", (preview_size, preview_size), 0)
    ImageDraw.Draw(circle).ellipse((4, 4, preview_size - 4, preview_size - 4), fill=255)
    circular = Image.new("RGBA", (preview_size, preview_size), (24, 24, 29, 255))
    preview_rgba = preview_source.convert("RGBA")
    preview_rgba.putalpha(circle)
    circular.alpha_composite(preview_rgba)
    circular.save(PREVIEW, format="PNG", optimize=True)

    print(FINAL_PNG)
    print(FINAL_JPG)
    print(PREVIEW)


if __name__ == "__main__":
    build()
