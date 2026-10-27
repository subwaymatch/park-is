import type { Project } from "../projects";

export const layeris: Project = {
  slug: "layeris",
  name: "layeris",
  year: "2019",
  revived: "2026",
  tagline: "Photoshop-style blend modes, adjustments and curves for Python.",
  links: [
    { label: "Website", url: "https://subwaymatch.github.io/layer-is-python/index.html" },
    { label: "Source", url: "https://github.com/subwaymatch/layer-is-python" },
    { label: "PyPI", url: "https://pypi.org/project/layeris/" },
  ],
  summary: [
    "A Python library for Photoshop-style image editing: 14 blend modes, tone and color adjustments, and curves on separate RGB channels. Every method returns the image, so an edit reads as one chained pipeline.",
    "It began in 2019 as Layer.is and was rebuilt in 2026 with tests, a lookup table that makes edits about 20× faster, and a new documentation site.",
  ],
  facts: [
    ["Stack", "Python 3.10+, NumPy, Pillow and Requests"],
    ["Award", "2nd place (Gold Prize, NIPA President’s Award), 2019 Open Source Software Developer Competition"],
    ["License", "MIT"],
  ],
  sections: [
    {
      type: "text",
      label: "Chained API",
      paragraphs: ["Load a photo, chain the edits, save. clone() branches an edit without reading the file again."],
    },
    {
      type: "logo",
      caption: "The Layer.is mark: three translucent layers sharing one white-to-cyan gradient.",
    },
    {
      type: "embed",
      name: "chain",
      bleed: true,
      caption: "The quick-start chain, one line at a time. Hover a step to hold it.",
    },
    {
      type: "full",
      figure: {
        file: "looks",
        kind: "loop",
        shape: "wide",
        caption: "The look switcher: four looks of one photo, each beside the code that made it.",
        mat: true,
      },
    },
    {
      type: "aside",
      figure: {
        file: "neon-nights",
        kind: "loop",
        shape: "tall",
        caption: "Neon Nights: a blue curve and a magenta soft light, before and after.",
        mat: true,
      },
    },
    {
      type: "embed",
      name: "compare-river",
      bleed: true,
      caption: "Neon Nights on the Han River at dawn. Drag the divider or use arrow keys.",
    },
    {
      type: "text",
      label: "Recipes",
      paragraphs: ["24 complete looks, each with a before/after slider and code that runs as printed."],
    },
    {
      type: "embed",
      name: "band",
      bleed: true,
      caption: "One hanok window, six looks, each with the code that made it.",
    },
    {
      type: "pair",
      figures: [
        {
          file: "teal-orange",
          kind: "loop",
          shape: "wide",
          caption: "Teal & Orange: opposing S-curves on the red and blue channels.",
          mat: true,
        },
        {
          file: "cross-processed",
          kind: "loop",
          shape: "wide",
          caption: "Cross-processed: three per-channel curves and nothing else.",
          mat: true,
        },
      ],
    },
    {
      type: "embed",
      name: "compare-jeju",
      caption: "Teal & Orange on a Jeju stone wall: teal shadows, orange evening light.",
    },
    {
      type: "embed",
      name: "triptych",
      caption: "Dancheong eaves three ways. The red filter turns the blue sky almost black.",
    },
    {
      type: "full",
      figure: {
        file: "filter",
        kind: "loop",
        shape: "wide",
        caption: "Filtering the recipes by the methods they use.",
        mat: true,
      },
    },
    {
      type: "text",
      label: "Blend modes",
      paragraphs: [
        "14 modes in darken, lighten and contrast groups. The blend layer is a hex color or a NumPy array, with an optional opacity.",
      ],
    },
    {
      type: "embed",
      name: "blend-grid",
      caption: "All 14 blend modes, one color, one rice bowl. Hover to see the base.",
    },
    {
      type: "embed",
      name: "opacity",
      caption: "Opacity mixes the blended result back with the original.",
    },
    {
      type: "aside",
      figure: {
        file: "blend-peek",
        kind: "loop",
        shape: "tall",
        caption: "Hovering a result shows the photo underneath.",
        mat: true,
      },
    },
    {
      type: "embed",
      name: "compare-tea",
      bleed: true,
      caption: "Cross-processed on a Jeju green-tea field: yellow-green highlights, deeper shadows.",
    },
    {
      type: "text",
      label: "Adjustments",
      paragraphs: [
        "Brightness, contrast, hue, saturation, lightness and grayscale are each one call. Curves remap any mix of the red, green and blue channels.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "adjustments",
        kind: "loop",
        shape: "wide",
        caption: "Each adjustment beside its one-line call.",
        mat: true,
      },
    },
    {
      type: "embed",
      name: "compare-namsan",
      bleed: true,
      caption: "Winter blues on Namsan in morning fog: blue soft light, lifted blue shadows.",
    },
    {
      type: "embed",
      name: "curve-chain",
      bleed: true,
      caption: "A duotone, one channel at a time: grayscale, then curves on red, green, blue.",
    },
    {
      type: "pair",
      figures: [
        {
          file: "warm-skin",
          kind: "loop",
          shape: "wide",
          caption: "Warm Up Skin Tones: red and blue curves as a white balance.",
          mat: true,
        },
        {
          file: "cyanotype",
          kind: "loop",
          shape: "wide",
          caption: "Cyanotype: grayscale, then a curve on each channel.",
          mat: true,
        },
      ],
    },
    {
      type: "embed",
      name: "compare-celadon",
      caption: "Sepia print on a celadon vase: three channel curves, black to brown, white to cream.",
    },
    {
      type: "text",
      label: "Portraits",
      paragraphs: [
        "Ten studio portraits in Joseon dress, from a young King Sejong and his queen to a yangban, a bride and a market peddler, each given a light look in a few layeris calls.",
      ],
    },
    {
      type: "embed",
      name: "portraits",
      caption: "Each portrait before and after its look, beside the code that made it.",
    },
    {
      type: "text",
      label: "Lookup table",
      paragraphs: [
        "Per-channel edits on an 8-bit photo run on a 256-entry table instead of every pixel. A 12-megapixel edit takes about 0.2 s instead of 4.1 s, with identical output.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "performance",
        kind: "loop",
        shape: "wide",
        caption: "Install, quick start and the performance numbers.",
        mat: true,
      },
    },
    {
      type: "embed",
      name: "preset",
      caption: "One JSON preset applied to four photos.",
    },
    {
      type: "full",
      figure: {
        file: "batch",
        kind: "loop",
        shape: "wide",
        caption: "A look saved as a JSON preset and applied to four photos.",
        mat: true,
      },
    },
    {
      type: "embed",
      name: "compare-bukchon",
      bleed: true,
      caption: "Duotone on Bukchon rooftops at dusk: indigo shadows, coral highlights.",
    },
    {
      type: "text",
      label: "Docs",
      paragraphs: ["The docs site is generated by a script that runs every snippet verbatim to render its image."],
    },
    {
      type: "aside",
      figure: {
        file: "api",
        kind: "loop",
        shape: "tall",
        caption: "The API reference: signatures, parameters, returns and errors.",
        mat: true,
      },
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption: "A tour of the docs: looks, sliders, blend modes and the API.",
        mat: true,
      },
    },
    {
      type: "pair",
      figures: [
        { file: "phone-looks", kind: "loop", shape: "phone", caption: "The look switcher on a phone." },
        { file: "phone-neon", kind: "loop", shape: "phone", caption: "The Neon Nights slider on a phone." },
      ],
    },
    {
      type: "full",
      figure: {
        file: "dark",
        kind: "loop",
        shape: "wide",
        caption: "The docs switched to the dark theme and back.",
        mat: true,
      },
    },
    {
      type: "embed",
      name: "compare-lake",
      bleed: true,
      caption: "Golden glow on a lake pavilion at dawn: screen, overlay and an S-curve.",
    },
    {
      type: "text",
      label: "History",
      paragraphs: [
        "Layer.is won 2nd place in the general division of the [2019 Open Source Software Developer Competition](https://www.nipa.kr/home/bsnsAll/1/nttDetail?tab=2&bbsNo=4&bsnsDtlsIemNo=58&nttNo=16815), among over 100 teams.",
      ],
    },
  ],
  ogImage: "looks",
  heroTone: "light",
};
