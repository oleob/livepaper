import { renderToStaticMarkup } from "react-dom/server";
import React from "react";

import Template from "../components/Template";
import SkyIsland from "../components/SkyIsland";
import Waterbottle from "../components/Waterbottle";

import iconMapper from "../utilities/iconMapper";

import weatherService from "../services/weatherService";

const svgController = {
  skyIsland: async (req, res, next) => {
    const width = req.query.width;
    const height = req.query.height;
    const city = req.query.city;
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
    const width = req.query.width;
    const height = req.query.height;
    const weatherIcon = req.query.weatherIcon;

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
    const width = req.query.width;
    const height = req.query.height;
    const batteryLevel = req.query.batteryLevel;

    const markup = renderToStaticMarkup(
      <Template width={width} height={height}>
        <Waterbottle batteryLevel={batteryLevel} />
      </Template>
    );
    res.send(markup);
  }
};

export default svgController;
