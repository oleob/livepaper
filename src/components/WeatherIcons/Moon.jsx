import React from "react";
import PropTypes from "prop-types";

const Moon = ({ x, y, scale, flip }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <g transform={`${flip ? "scale(-1,1) translate(-100,0) " : ""}`}>
      <circle fill="#D6CDA1" cx="50" cy="50" r="48.3" />
      <circle
        fill="#CCC29B"
        stroke="#BCB491"
        stroke-miterlimit="10"
        cx="20.2"
        cy="34.7"
        r="8.7"
      />
      <circle
        fill="#CCC29B"
        stroke="#BCB491"
        stroke-miterlimit="10"
        cx="53.2"
        cy="22.9"
        r="12.8"
      />
      <circle
        fill="#CCC29B"
        stroke="#BCB491"
        stroke-miterlimit="10"
        cx="84"
        cy="41.1"
        r="6.4"
      />
      <circle
        fill="#CCC29B"
        stroke="#BCB491"
        stroke-miterlimit="10"
        cx="48.3"
        cy="61.2"
        r="7.1"
      />
      <circle
        fill="#CCC29B"
        stroke="#BCB491"
        stroke-miterlimit="10"
        cx="73.8"
        cy="71.4"
        r="11.5"
      />
      <path
        fill="#BCB491"
        d="M37.2,82.5C18.2,70.3,7.5,50,6.5,29C-4,50.7,3.1,77.2,23.8,90.6c14.8,9.6,32.9,10,47.7,2.7
	C59.7,92.9,47.9,89.4,37.2,82.5z"
      />
      <circle
        fill="#CCC29B"
        stroke="#BCB491"
        stroke-miterlimit="10"
        cx="23.1"
        cy="63.7"
        r="9.1"
      />
      <circle
        fill="#CCC29B"
        stroke="#BCB491"
        stroke-miterlimit="10"
        cx="41.2"
        cy="86.7"
        r="7.1"
      />
    </g>
  </g>
);

Moon.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scale: PropTypes.number,
  flip: PropTypes.bool
};

Moon.defaultProps = {
  x: 0,
  y: 0,
  scale: 1,
  flip: false
};

export default Moon;
