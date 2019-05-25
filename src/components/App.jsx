import React from "react";

import Template from "./Template";
import Cloud from "./Cloud";
import Degrees from "./Degrees";
import SkyIsland from "./SkyIsland";

const App = ({ width, height }) => (
  <Template width={width} height={height}>
    <Cloud x={600} y={0} scale={1.9} flip/>
    <SkyIsland />
    <Cloud x={175} y={80} scale={2} flip />
    <Cloud x={600} y={120} scale={1.7}/>
    <Degrees x={800} y={100} degrees={50} scale={1.2}/>
  </Template>
);

export default App;
