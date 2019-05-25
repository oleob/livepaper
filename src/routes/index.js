import express from "express";

import weatherController from "../controllers/weatherController";
import svgController from "../controllers/svgController";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the api");
});

router.get("/current-weather", weatherController.fetchCurrentWeather);

router.get("/sky-island", svgController.skyIsland);

router.get("/custom-weather", svgController.customWeather);

router.get('/waterbottle', svgController.waterBottle);

export default router;
