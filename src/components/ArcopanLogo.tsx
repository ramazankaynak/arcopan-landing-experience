import type { SVGProps } from "react";

/**
 * ARCOPAN SVG logo — uses fill="currentColor" throughout.
 * Control colour by setting `color` via inline style or a Tailwind `text-*` class.
 *
 * Usage examples:
 *   <ArcopanLogo style={{ color: "#ed1c24" }} />
 *   <ArcopanLogo className="text-white" />
 *   <ArcopanLogo className="text-white" width={200} />
 */

type ArcopanLogoProps = SVGProps<SVGSVGElement> & {
  /** Extra class names passed to the wrapping <a> element */
  linkClassName?: string;
  /** If false, renders the SVG without a wrapping anchor (default: true) */
  linked?: boolean;
  /** href for the anchor — defaults to "/" */
  href?: string;
};

const ArcopanSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-20 0 1107.6 220"
    role="img"
    aria-label="ARCOPAN"
    {...props}
  >
    <title>ARCOPAN</title>
    <g fill="currentColor">
      {/* A */}
      <path d="M72.6 61.4C74 58.2 76.2 56.8 79.4 56.8C82.6 56.8 84.8 58.2 86 61.4L127 170H153.2L107.6 50C102.8 37.4 93.6 32.6 79.6 32.6C65.4 32.6 56.2 37.4 51.2 50L3.8 170H29.8Z" />
      {/* R */}
      <path d="M172.8 35V58.6H246.8C259.8 58.6 265.6 66.8 265.6 76.4C265.6 86 260.2 95.2 246.8 95.2H194.2C179.4 95.2 173 101.4 173 116.6V170H196.6V121.2C196.6 118.8 197.8 117.8 200 117.8H235.2L266 170H292.2L260.8 116C281.4 110.2 289.4 92.2 289.4 75.4C289.4 53.8 276.4 35 246 35Z" />
      {/* C */}
      <path d="M372 35C332.8 35 311 57.2 311 102.6C311 147.8 332.6 170 372 170H424.2V146.4H372C345.8 146.4 334.6 133.4 334.6 102.6C334.6 71.6 346 58.6 372 58.6H424.2V35Z" />
      {/* O */}
      <path d="M508.4 35C469.2 35 447.4 57.4 447.4 102.8C447.4 148 469 170 508.4 170H526.8C566.2 170 587.8 148 587.8 102.8C587.8 57.4 566 35 526.8 35ZM526.8 58.6C552.8 58.6 564 71.8 564 102.6C564 133.6 552.8 146.4 526.8 146.4H508.4C482.2 146.4 471 133.6 471 102.8C471 71.8 482.4 58.6 508.4 58.6Z" />
      {/* P */}
      <path d="M615.2 35V58.6H685.4C698.2 58.6 704 66.8 704 76.6C704 86 698.6 95.2 685.2 95.2H636.6C621.8 95.2 615.4 101.4 615.4 116.6V170H639V121.2C639 118.8 640.2 117.8 642.4 117.8H684.4C716 117.8 727.8 95.8 727.8 75.4C727.8 53.8 714.8 35 684.4 35Z" />
      {/* A */}
      <path d="M807.6 61.4C809 58.2 811.2 56.8 814.4 56.8C817.6 56.8 819.8 58.2 821 61.4L862 170H888.2L842.6 50C837.8 37.4 828.6 32.6 814.6 32.6C800.4 32.6 791.2 37.4 786.2 50L738.8 170H764.8Z" />
      {/* N */}
      <path d="M931.6 63.2C931.6 58.4 934.4 55.4 939.8 55.4C944 55.4 946.4 57.2 948.2 61.2L987.6 147.4C993.2 162.8 1001.8 172.4 1020.6 172.4C1041.4 172.4 1051.6 160.6 1051.6 142.8V35H1027.8V141.8C1027.8 146.4 1024.8 149.4 1019.8 149.4C1015.4 149.4 1012.8 147 1011.2 143.8L971.8 57.6C966.2 42.2 957.8 32.6 939 32.6C918 32.6 908 44.4 908 62V170H931.6Z" />
    </g>
  </svg>
);

const ArcopanLogo = ({
  linkClassName = "",
  linked = true,
  href = "/",
  className = "",
  style,
  ...svgProps
}: ArcopanLogoProps) => {
  const svg = (
    <ArcopanSVG
      className={`block w-full h-auto${className ? ` ${className}` : ""}`}
      style={style}
      {...svgProps}
    />
  );

  if (!linked) return svg;

  return (
    <a
      href={href}
      aria-label="ARCOPAN — back to homepage"
      className={`arcopan-logo-link inline-block line-height-0 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm${linkClassName ? ` ${linkClassName}` : ""}`}
      style={{
        width: "clamp(140px, 18vw, 260px)",
        lineHeight: 0,
        textDecoration: "none",
      }}
    >
      {svg}
    </a>
  );
};

export { ArcopanSVG };
export default ArcopanLogo;
