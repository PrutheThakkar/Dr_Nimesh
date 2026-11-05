import * as React from "react"
import banner from "../images/Dr. Nimesh Banner Transparent 1.png"

// Coordinates follow the curved connections in the original 1926 × 834 PNG.
const connections = [
  { path: "M20 292 C90 231 170 240 220 283 C310 355 335 458 410 502 C600 613 800 641 1020 616 C1210 590 1415 540 1570 519 C1710 490 1680 202 1926 118", duration: "16s" },
  { path: "M103 526 C220 322 396 275 526 416 C605 506 688 625 777 734 C928 771 1162 540 1310 505 C1465 472 1520 600 1418 706", duration: "19s" },
  { path: "M1495 283 C1575 300 1615 345 1650 401 C1700 477 1775 476 1835 577", duration: "10s" },
]

export default function HomeBanner() {
  return (
    <div className="hero__image home-banner" aria-hidden="true">
      <div className="home-banner__canvas">
        <svg className="home-banner__network" viewBox="0 0 1926 834" focusable="false">
          <defs>
            <filter id="home-ball-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <g className="home-banner__flow">
          <image href={banner} width="1926" height="834" />
          {connections.map(({ path, duration }, index) => (
            <g key={path}>
              <path className="home-banner__stroke" d={path} pathLength="1" style={{ animationDelay: `${index * -2}s` }} />
              <g className="home-banner__ball">
                <circle r="12" fill="#ff931e" opacity=".65" filter="url(#home-ball-glow)" />
                <circle r="4.5" fill="#ff8a13" stroke="#ffda96" strokeWidth="1.5" />
                <animateMotion dur={`${parseInt(duration, 10) * 0.65}s`} begin={`${index * -3}s`} repeatCount="indefinite" path={path} calcMode="paced" />
              </g>
            </g>
          ))}
          {[[185, 258], [324, 408], [723, 617], [1024, 615], [1430, 581], [1589, 551]].map(([cx, cy], index) => (
            <circle className="home-banner__pulse" key={cx} cx={cx} cy={cy} r="15" style={{ animationDelay: `${index * -.8}s` }} />
          ))}
          </g>
        </svg>
      </div>
    </div>
  )
}
