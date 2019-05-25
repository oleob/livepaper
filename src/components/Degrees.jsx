import React from "react";
import PropTypes from "prop-types";

const Degrees = ({ x, y, scale, degrees }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <text
      transform="matrix(1 0 0 1 19.0103 62.8936)"
      fill="#0A3142"
      fontFamily="'MyriadPro-Regular'"
      fontSize="43.9273px"
    >
      {`${degrees}°C`}
    </text>
  </g>
);

Degrees.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scale: PropTypes.number,
  degrees: PropTypes.number
};

Degrees.defaultProps = {
  x: 0,
  y: 0,
  scale: 1,
  degrees: 0
};

export default Degrees;
