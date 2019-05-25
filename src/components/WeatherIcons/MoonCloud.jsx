import React from "react";
import PropTypes from "prop-types";

const MoonCloud = ({ x, y, scale, flip }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <g transform={`${flip ? "scale(-1,1) translate(-100,0) " : ""}`}>
      <g>
        <circle fill="#D6CDA1" cx="33.2" cy="32.8" r="29.6" />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="15"
          cy="23.4"
          r="5.4"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="35.2"
          cy="16.2"
          r="7.9"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="54.1"
          cy="27.3"
          r="3.9"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="32.2"
          cy="39.6"
          r="4.3"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="47.8"
          cy="45.9"
          r="7"
        />
        <path
          fill="#BCB491"
          d="M25.4,52.7C13.8,45.2,7.2,32.8,6.6,19.9C0.2,33.2,4.5,49.4,17.2,57.6c9.1,5.9,20.2,6.1,29.2,1.6
		C39.2,59,31.9,56.9,25.4,52.7z"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="16.8"
          cy="41.2"
          r="5.6"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="27.9"
          cy="55.2"
          r="4.3"
        />
      </g>
      <g>
        <g>
          <path
            fill="#94A3AF"
            d="M73.4,26c-7,0-13.3,2.9-17.7,7.4c-3.7-3.2-8.6-5.1-13.9-5.1c-11.1,0-20.2,8.4-21,19.1
			c-1.5-0.5-3.1-0.8-4.8-0.8c-7.8,0-14,6.1-14,13.7C2,67.9,8.3,74,16,74h56.2v-0.1c0.4,0,0.8,0.1,1.2,0.1C87,74,98,63.2,98,50
			S87,26,73.4,26z"
          />
        </g>
        <g>
          <path
            fill="#808D96"
            d="M75.2,67.1c-0.4,0-0.8,0-1.2-0.1v0.1H13.8C9,67.1,4.8,65,2.1,61.7C2.8,68.6,8.8,74,16,74h56.2v-0.1
			c0.4,0,0.8,0.1,1.2,0.1c11.7,0,21.5-8,24-18.7C92.7,62.4,84.5,67.1,75.2,67.1z"
          />
        </g>
      </g>
    </g>
  </g>
);

MoonCloud.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scale: PropTypes.number,
  flip: PropTypes.bool
};

MoonCloud.defaultProps = {
  x: 0,
  y: 0,
  scale: 1,
  flip: false
};

export default MoonCloud;
