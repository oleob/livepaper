import React, { cloneElement } from "react";

import Template from "../Template";
import Waterbottle from "../Waterbottle";

const WaterbottleTemplate = ({width, height, children}) => (
  <Template width={width} height={height}>
    <Waterbottle />
  </Template>
)

export default WaterbottleTemplate;
