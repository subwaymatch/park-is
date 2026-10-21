import { LogoStage } from "./logo-stage";

// Each mark is the project's own SVG, split into the parts that move. The
// animations live in app/globals.css under "Logos".

/** Samsung DRS: two clipped layers rise into the shape, then drift. */
function SamsungDrsLogo() {
  return (
    <LogoStage color="oklch(0.66 0.16 293)">
      <svg viewBox="0 0 88 76" className="logo-mark" role="img" aria-label="The Samsung DRS logo">
        <defs>
          <path
            id="drs-shape"
            d="M44 1C51 1 57 2 61 6L86.2 43.5C87.2 45 87.3 47 86.6 48.5L76.5 71.5C75.6 73.5 73.6 74.5 71.6 73.9C53.5 66.5 34.5 66.5 16.4 73.9C14.4 74.5 12.4 73.5 11.5 71.5L1.4 48.5C0.7 47 0.8 45 1.8 43.5L27 6C31 2 37 1 44 1Z"
          />
          <clipPath id="drs-clip">
            <use href="#drs-shape" />
          </clipPath>
        </defs>
        <use href="#drs-shape" fill="oklch(0.8 0.1 293)" />
        <g clipPath="url(#drs-clip)">
          <g className="drs-layer drs-layer-1">
            <use href="#drs-shape" fill="oklch(0.66 0.16 293)" transform="translate(44 15) scale(0.92 1) translate(-44 0)" />
          </g>
          <g className="drs-layer drs-layer-2">
            <use href="#drs-shape" fill="oklch(0.5 0.19 293)" transform="translate(44 31) scale(1.08 1) translate(-44 0)" />
          </g>
        </g>
      </svg>
    </LogoStage>
  );
}

/** layeris: three translucent layers slide into a stack, then float over one another. */
function LayerisLogo() {
  return (
    <LogoStage color="#00b9d4">
      <svg viewBox="28 28 304 265" className="logo-mark" role="img" aria-label="The layeris logo">
        <defs>
          <radialGradient
            id="layeris-fill"
            cx="0.5"
            cy="0.5"
            r="0.5"
            gradientTransform="translate(0.5 0.5) scale(0.904 1.137) translate(-0.5 -0.5)"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#00b9d4" />
          </radialGradient>
        </defs>
        <g fill="url(#layeris-fill)" fillOpacity="0.36">
          <path
            className="layeris-layer layeris-layer-1"
            d="M93.5 201.7C83.8 203.3 76.2 199.9 69.1 193.5C62 187.1 55.3 177.8 51.3 166.4C47.3 155.1 46 141.8 46.1 128.7C46.3 115.5 48 102.5 51.5 89.6C55.1 76.7 60.5 64 67.3 54.2C74.2 44.5 82.5 37.7 92.5 34C102.5 30.3 114.1 29.5 127.1 30.4C140.1 31.3 154.4 33.8 168.4 37.2C182.4 40.6 196 45.1 209.6 50C223.3 54.9 236.9 60.4 250.8 66.4C264.7 72.5 278.9 79.1 287.8 85.9C296.7 92.6 300.2 99.5 300.8 105.5C301.4 111.6 299.1 116.9 290.8 121.3C282.6 125.8 268.3 129.5 253.6 134C238.8 138.6 223.6 144 209.4 149.4C195.2 154.8 182 160.2 168.5 166.5C154.9 172.8 141 180 128 186.8C115.1 193.7 103.2 200.1 93.5 201.7Z"
          />
          <path
            className="layeris-layer layeris-layer-2"
            d="M88.1 239.9C77.8 241.9 69.4 238.8 61.6 233C53.8 227.2 46.6 218.6 42.2 207.3C37.9 196.1 36.5 182.2 36.9 168.4C37.2 154.5 39.3 140.7 43.7 127.8C48.1 114.9 54.7 103 63 93.1C71.3 83.2 81.2 75.2 92.5 70C103.9 64.8 116.7 62.3 130.6 61.3C144.5 60.2 159.4 60.7 173.8 62.4C188.2 64.2 202.1 67.3 215.8 72.2C229.6 77 243.1 83.6 255.2 91.4C267.3 99.3 277.9 108.4 287.6 119.1C297.4 129.8 306.4 142.2 311.1 152.2C315.8 162.2 316.3 170 313.5 175C310.7 180.1 304.6 182.5 293.2 183.5C281.7 184.4 265 183.9 250 184.6C235 185.3 221.9 187.1 207.8 190.3C193.6 193.4 178.5 197.8 164.2 203.6C149.8 209.3 136.3 216.4 123.5 223.5C110.6 230.6 98.4 237.8 88.1 239.9Z"
          />
          <path
            className="layeris-layer layeris-layer-3"
            d="M71.1 290.1C64.6 291.7 60 289.9 54.7 286.5C49.3 283.1 43.4 278.2 38.6 268.1C33.8 258.1 30.2 242.9 30 227.3C29.7 211.7 32.8 195.7 37.7 182.6C42.7 169.5 49.5 159.3 60.6 149.1C71.6 139 86.9 128.9 102.8 121.9C118.8 114.9 135.5 110.9 152.4 109.5C169.3 108.1 186.4 109.2 204.4 113.6C222.4 118 241.3 125.7 257.8 134.4C274.3 143.2 288.4 153 300.2 164.8C311.9 176.6 321.3 190.3 326 199.5C330.7 208.8 330.8 213.6 329.7 217C328.7 220.4 326.5 222.5 323.1 224.4C319.6 226.3 314.8 228.1 299.3 226.3C283.8 224.5 257.6 219 235.9 217.3C214.2 215.5 197 217.4 181.5 220.5C165.9 223.6 151.9 227.9 137.6 237.7C123.3 247.5 108.7 263 97.2 273.2C85.8 283.4 77.5 288.5 71.1 290.1Z"
          />
        </g>
      </svg>
    </LogoStage>
  );
}

/** Dataslope: the two strokes slide in to meet at the peak, then sway about it. */
function DataslopeLogo() {
  return (
    <LogoStage color="#148cff">
      <svg viewBox="0 0 1087.59 682.55" className="logo-mark" role="img" aria-label="The Dataslope logo">
        <defs>
          <radialGradient id="dataslope-left" cx="339.84" cy="341.28" r="340.56" gradientUnits="userSpaceOnUse">
            <stop offset=".19" stopColor="#148cff" stopOpacity=".6" />
            <stop offset=".32" stopColor="#148cff" stopOpacity=".62" />
            <stop offset=".51" stopColor="#148cff" stopOpacity=".69" />
            <stop offset=".72" stopColor="#148cff" stopOpacity=".81" />
            <stop offset=".96" stopColor="#148cff" stopOpacity=".97" />
            <stop offset="1" stopColor="#148cff" />
          </radialGradient>
          <radialGradient id="dataslope-right" cx="798.17" cy="382.86" r="318.51" gradientUnits="userSpaceOnUse">
            <stop offset=".14" stopColor="#148cff" />
            <stop offset=".34" stopColor="#148cff" stopOpacity=".89" />
            <stop offset=".76" stopColor="#148cff" stopOpacity=".68" />
            <stop offset=".96" stopColor="#148cff" stopOpacity=".6" />
          </radialGradient>
        </defs>
        <path
          className="dataslope-half dataslope-left"
          fill="url(#dataslope-left)"
          d="M679.63,139.57c.05-1.45.06-2.21.06-3.67C679.69,60.84,618.85,0,543.79,0s-132.49,57.51-135.75,129.67h0s-2.99,129.29-85.67,205.52c-73.47,67.75-167.89,74.85-188,75.59-1.2.01-2.39.04-3.58.09-.2,0-.3,0-.3,0h0C57.94,413.72,0,473.42,0,546.66s60.84,135.89,135.89,135.89c3.22,0,6.41-.12,9.57-.34h0s278.11,3.51,437.31-237.01c100.12-151.26,96.85-304.24,96.85-304.24v-1.4Z"
        />
        <path
          className="dataslope-half dataslope-right"
          fill="url(#dataslope-right)"
          d="M407.96,139.57c-.05-1.45-.06-2.21-.06-3.67C407.91,60.84,468.75,0,543.8,0s132.49,57.51,135.75,129.67h0s2.99,129.29,85.67,205.52c73.47,67.75,167.89,74.85,188,75.59,1.2.01,2.39.04,3.58.09.2,0,.3,0,.3,0h0c72.55,2.85,130.49,62.55,130.49,135.79s-60.84,135.89-135.89,135.89c-3.22,0-6.41-.12-9.57-.34h0s-278.11,3.51-437.31-237.01c-100.12-151.26-96.85-304.24-96.85-304.24v-1.4Z"
        />
      </svg>
    </LogoStage>
  );
}

/** A project's logo, drawn large and animated. Projects without one render nothing. */
export function ProjectLogo({ slug }: { slug: string }) {
  switch (slug) {
    case "samsung-drs":
      return <SamsungDrsLogo />;
    case "layeris":
      return <LayerisLogo />;
    case "dataslope":
      return <DataslopeLogo />;
    default:
      return null;
  }
}
