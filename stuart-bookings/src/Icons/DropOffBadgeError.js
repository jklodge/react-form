import React from "react";

function SvgDropOffBadgeError(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fillRule="nonzero" fill="none">
        <circle fill="#FF465C" cx={16} cy={16} r={16} />
        <path
          d="M10 7a1 1 0 011 1v16a1 1 0 11-2 0V8a1 1 0 011-1zm2 1h11.117a.5.5 0 01.429.757l-2.237 3.729a1 1 0 000 1.029l2.237 3.728a.5.5 0 01-.43.757H12V8z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}

export default SvgDropOffBadgeError;
