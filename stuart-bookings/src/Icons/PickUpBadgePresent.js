import React from "react";

function SvgPickUpBadgePresent(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#FFB11F" fillRule="nonzero" cx={16} cy={16} r={16} />
        <path d="M4 4h24v24H4z" />
        <path
          d="M25 17v6.083c0 .507-.41.917-.917.917H8.07A1.07 1.07 0 017 22.93V17H6v-2l1-4h18l1 4v2h-1zM7.23 8h17.54a.23.23 0 01.23.23V10H7V8.23A.23.23 0 017.23 8zm2.02 10a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-6.5zm8.98 0a.23.23 0 00-.23.23V24h4v-5.77a.23.23 0 00-.23-.23h-3.54z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgPickUpBadgePresent;
