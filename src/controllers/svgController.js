import { renderToStaticMarkup } from "react-dom/server";
import React from "react";

import Template from "../components/Template";
import SkyIsland from "../components/SkyIsland";
import Waterbottle from "../components/Waterbottle";

import iconMapper from "../utilities/iconMapper";

import weatherService from "../services/weatherService";

const svgController = {
  skyIsland: async (req, res, next) => {
    const width = req.query.width || "1000";
    const height = req.query.height || "1000";
    const city = req.query.city || 'Oslo';
    const currentWeather = await weatherService.getCurrentWeather(city, next);
    const Icon = iconMapper(currentWeather.weather[0].icon);

    const markup = renderToStaticMarkup(
      <Template width={width} height={height}>
        <Icon x={100} y={0} scale={2} />
        <SkyIsland />
      </Template>
    );
    res.send(markup);
  },
  customWeather: async (req, res) => {
    const width = req.query.width || "1000";
    const height = req.query.height || "1000";
    const weatherIcon = req.query.weatherIcon || '01d';

    const Icon = iconMapper(weatherIcon);

    const markup = renderToStaticMarkup(
      <Template width={width} height={height}>
        <Icon x={100} y={0} scale={2} />
        <SkyIsland />
      </Template>
    );
    res.send(markup);
  },
  waterBottle: (req, res) => {
    const width = req.query.width || "1000";
    const height = req.query.height || "1000";
    const batteryLevel = req.query.batteryLevel || "43";

    const markup = renderToStaticMarkup(
      <Template width={width} height={height}>
        <Waterbottle batteryLevel={batteryLevel} />
      </Template>
    );
    res.send(markup);
  }
};

export default svgController;
