import React from "react";
import PropTypes from "prop-types";

const Cloud = ({ x, y, scale, flip }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <g transform={`${flip ? "scale(-1,1) translate(-100,0) " : ""}`}>
      <g>
        <path
          fill="#94A3AF"
          d="M73.41,26c-6.98,0-13.26,2.85-17.73,7.4c-3.71-3.18-8.56-5.12-13.88-5.12c-11.13,0-20.23,8.43-21,19.11
			c-1.49-0.52-3.09-0.82-4.76-0.82C8.29,46.57,2,52.71,2,60.29C2,67.86,8.29,74,16.05,74h56.2v-0.06c0.39,0.02,0.78,0.06,1.17,0.06
			C86.99,74,98,63.25,98,50C98,36.75,86.99,26,73.41,26z"
        />
      </g>
      <g>
        <path
          fill="#808D96"
          d="M75.21,67.14c-0.42,0-0.84-0.04-1.25-0.06v0.06H13.77c-4.73,0-8.94-2.13-11.7-5.46
			C2.79,68.6,8.77,74,16.05,74h56.2v-0.06c0.39,0.02,0.78,0.06,1.17,0.06c11.72,0,21.52-8.01,23.98-18.72
			C92.72,62.41,84.53,67.14,75.21,67.14z"
        />
      </g>
    </g>
  </g>
);

Cloud.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scale: PropTypes.number,
  flip: PropTypes.bool
};

Cloud.defaultProps = {
  x: 0,
  y: 0,
  scale: 1,
  flip: false
};

export default Cloud;
