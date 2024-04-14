export default function HomepageCurve({
  ariaHidden = "true",
  width = "500",
  height = "500",
  ...delegated
}) {
  return (
    <svg
      {...delegated}
      aria-hidden={ariaHidden}
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="ring-container">
          <rect x="2" y="2" width="100" height="100" fill="#F79257" />
        </clipPath>
      </defs>
      <g transform="translate(98,1)">
        <circle
          cx="2"
          cy="2"
          r="95"
          fill="none"
          strokeWidth="1.1"
          stroke="#ed6d37"
          clipPath="url(#ring-container)"
        />
        <circle cx="97" cy="2" r="1.75" fill="#fff" />
        <circle
          cx="97"
          cy="2"
          r="1.75"
          fill="#fff"
          transform="rotate(23) translate(0.5,0)"
        />
        <circle
          cx="97"
          cy="2"
          r="1.75"
          fill="#fff"
          transform="rotate(52) translate(0.5,0)"
        />
      </g>
      <g transform="scale(-1, 1) translate(-102, 1)">
        <circle
          cx="2"
          cy="2"
          r="95"
          fill="none"
          strokeWidth="1.1"
          stroke="rgba(250,250,250,0.3)"
          clipPath="url(#ring-container)"
        />
        <circle cx="97" cy="2" r="1.75" fill="#fff" />
        <circle
          cx="97"
          cy="2"
          r="1.75"
          fill="#fff"
          transform="rotate(23) translate(0.5,0)"
        />
        <circle
          cx="97"
          cy="2"
          r="1.75"
          fill="#fff"
          transform="rotate(52) translate(0.5,0)"
        />
      </g>
    </svg>
  )
}
