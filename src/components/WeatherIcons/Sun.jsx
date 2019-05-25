import React from "react";
import PropTypes from "prop-types";

const Sun = ({ x, y, scale, flip }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <g transform={`${flip ? "scale(-1,1) translate(-100,0) " : ""}`}>
      <path
        fill="#EFEA5A"
        d="M89.1,55.9L95,50l-5.9-5.9c-0.9-0.9-1.2-2.4-0.7-3.6l3.2-7.7l-7.7-3.2c-1.2-0.5-2-1.7-2-3.1v-8.4h-8.4
	c-1.3,0-2.5-0.8-3.1-2l-3.2-7.7l-7.7,3.2c-1.2,0.5-2.7,0.2-3.6-0.7L50,5l-5.9,5.9c-0.9,0.9-2.4,1.2-3.6,0.7l-7.7-3.2l-3.2,7.7
	c-0.5,1.2-1.7,2-3.1,2h-8.4v8.4c0,1.3-0.8,2.5-2,3.1l-7.7,3.2l3.2,7.7c0.5,1.2,0.2,2.7-0.7,3.6L5,50l5.9,5.9
	c0.9,0.9,1.2,2.4,0.7,3.6l-3.2,7.7l7.7,3.2c1.2,0.5,2,1.7,2,3.1v8.4h8.4c1.3,0,2.5,0.8,3.1,2l3.2,7.7l7.7-3.2
	c1.2-0.5,2.7-0.2,3.6,0.7L50,95l5.9-5.9c0.9-0.9,2.4-1.2,3.6-0.7l7.7,3.2l3.2-7.7c0.5-1.2,1.7-2,3.1-2h8.4v-8.4c0-1.3,0.8-2.5,2-3.1
	l7.7-3.2l-3.2-7.7C87.9,58.3,88.2,56.8,89.1,55.9z"
      />
      <circle
        fill="#F06543"
        stroke="#F29E4C"
        strokeWidth="4"
        strokeMiterlimit="10"
        cx="50"
        cy="50"
        r="33.8"
      />
    </g>
  </g>
);

Sun.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scale: PropTypes.number,
  flip: PropTypes.bool
};

Sun.defaultProps = {
  x: 0,
  y: 0,
  scale: 1,
  flip: false
};

export default Sun;
