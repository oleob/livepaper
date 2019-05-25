import React from "react";
import PropTypes from "prop-types";

const MoonRainCloud = ({ x, y, scale, flip }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <g transform={`${flip ? "scale(-1,1) translate(-100,0) " : ""}`}>
      <g>
        <circle fill="#D6CDA1" cx="28.6" cy="27.6" r="26.2" />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="12.5"
          cy="19.3"
          r="4.7"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="30.4"
          cy="12.9"
          r="7"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="47.1"
          cy="22.7"
          r="3.5"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="27.7"
          cy="33.6"
          r="3.8"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="41.5"
          cy="39.2"
          r="6.2"
        />
        <path
          fill="#BCB491"
          d="M21.7,45.2C11.4,38.6,5.6,27.6,5,16.2c-5.7,11.7-1.8,26.1,9.4,33.4c8.1,5.2,17.9,5.4,25.9,1.5
		C33.9,50.8,27.5,49,21.7,45.2z"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="14.1"
          cy="35"
          r="4.9"
        />
        <circle
          fill="#CCC29B"
          stroke="#BCB491"
          stroke-miterlimit="10"
          cx="23.9"
          cy="47.5"
          r="3.8"
        />
      </g>
      <g>
        <g>
          <g>
            <path
              fill="#94A3AF"
              d="M73.2,18.2c-7,0-13.3,2.9-17.7,7.4c-3.7-3.2-8.6-5.1-13.9-5.1c-11.1,0-20.2,8.4-21,19.1
				c-1.5-0.5-3.1-0.8-4.8-0.8c-7.8,0-14,6.1-14,13.7s6.3,13.7,14,13.7H72v-0.1c0.4,0,0.8,0.1,1.2,0.1c13.6,0,24.6-10.7,24.6-24
				S86.8,18.2,73.2,18.2z"
            />
          </g>
          <g>
            <path
              fill="#808D96"
              d="M75,59.4c-0.4,0-0.8,0-1.2-0.1v0.1H13.6c-4.7,0-8.9-2.1-11.7-5.5c0.7,6.9,6.7,12.3,14,12.3h56.2v-0.1
				c0.4,0,0.8,0.1,1.2,0.1c11.7,0,21.5-8,24-18.7C92.5,54.6,84.3,59.4,75,59.4z"
            />
          </g>
        </g>
        <g>
          <path
            fill="#516CAF"
            d="M25.1,69.9l-6.5,8.3c-2.6,3.3-2.3,8,0.7,11l0,0c3.2,3.2,8.5,3.2,11.7,0c3-3,3.2-7.7,0.7-11L25.1,69.9z"
          />
          <path
            fill="#516CAF"
            d="M49,77.2l-6.5,8.4c-2.6,3.3-2.3,8,0.7,11c3.2,3.2,8.5,3.2,11.7,0c3-3,3.2-7.7,0.7-11L49,77.2z"
          />
          <path
            fill="#516CAF"
            d="M79.5,78.2L73,69.9l-6.5,8.3c-2.6,3.3-2.3,8,0.7,11l0,0c3.2,3.2,8.5,3.2,11.7,0
			C81.8,86.2,82,81.5,79.5,78.2z"
          />
        </g>
      </g>
    </g>
  </g>
);

MoonRainCloud.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scale: PropTypes.number,
  flip: PropTypes.bool
};

MoonRainCloud.defaultProps = {
  x: 0,
  y: 0,
  scale: 1,
  flip: false
};

export default MoonRainCloud;
