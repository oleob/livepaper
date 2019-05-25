import React from "react";
import PropTypes from "prop-types";

const Template = ({ width, height, children }) => {
  const scale = Math.min(width, height) / 1000;
  const x = (width / 2) - 500*scale;
  const y = (height / 2) - 500*scale;
  return (
    <svg x={0} y={0} width={`${width}px`} height={`${height}px`}>
      <g transform={`translate(${x}, ${y}) scale(${scale})`}>
        {children}
      </g>
    </svg>
  );
};

Template.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired
};

Template.defaultProps = {
  width: "1000",
  height: "1000"
};

export default Template;
