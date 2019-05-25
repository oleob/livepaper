import React, { cloneElement } from "react";

import Template from "../Template";
import SkyIsland from "../SkyIsland";

const SkyIslandTemplate = ({width, height, children}) => (
  <Template width={width} height={height}>
    <SkyIsland />
    {cloneElement(children, { x: 100, y: 0, scale: 2, flip: false },)}
  </Template>
)

export default SkyIslandTemplate;
