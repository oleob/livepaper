import React from "react";
import PropTypes from "prop-types";

const RainCloud = ({ x, y, scale, flip }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <g transform={`${flip ? "scale(-1,1) translate(-100,0) " : ""}`}>
      <g>
        <g>
          <path
            fill="#94A3AF"
            d="M73.4,9.6c-7,0-13.3,2.9-17.7,7.4c-3.7-3.2-8.6-5.1-13.9-5.1c-11.1,0-20.2,8.4-21,19.1
				c-1.5-0.5-3.1-0.8-4.8-0.8c-7.8,0-14,6.1-14,13.7c0,7.6,6.3,13.7,14,13.7h56.2v-0.1c0.4,0,0.8,0.1,1.2,0.1
				C87,57.6,98,46.9,98,33.6S87,9.6,73.4,9.6z"
          />
        </g>
        <g>
          <path
            fill="#808D96"
            d="M75.2,50.8c-0.4,0-0.8,0-1.2-0.1v0.1H13.8c-4.7,0-8.9-2.1-11.7-5.5c0.7,6.9,6.7,12.3,14,12.3h56.2v-0.1
				c0.4,0,0.8,0.1,1.2,0.1c11.7,0,21.5-8,24-18.7C92.7,46,84.5,50.8,75.2,50.8z"
          />
        </g>
      </g>
      <g>
        <path
          fill="#516CAF"
          d="M25.3,61.3l-6.5,8.3c-2.6,3.3-2.3,8,0.7,11h0c3.2,3.2,8.5,3.2,11.7,0c3-3,3.2-7.7,0.7-11L25.3,61.3z"
        />
        <path
          fill="#516CAF"
          d="M49.2,68.6L42.7,77c-2.6,3.3-2.3,8,0.7,11c3.2,3.2,8.5,3.2,11.7,0c3-3,3.2-7.7,0.7-11L49.2,68.6z"
        />
        <path
          fill="#516CAF"
          d="M79.7,69.6l-6.5-8.3l-6.5,8.3c-2.6,3.3-2.3,8,0.7,11h0c3.2,3.2,8.5,3.2,11.7,0
			C82,77.6,82.2,72.9,79.7,69.6z"
        />
      </g>
    </g>
  </g>
);

RainCloud.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scale: PropTypes.number,
  flip: PropTypes.bool
};

RainCloud.defaultProps = {
  x: 0,
  y: 0,
  scale: 1,
  flip: false
};

export default RainCloud;
