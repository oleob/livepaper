import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import path from "path";
import routes from "./routes";
import cacheMiddleware from "./middleware/cacheMiddleware";

const app = express();

const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    next();
  }
};

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(helmet());

app.get("/test", (req, res) => {
  res.send("Hello, this is API :D :D");
});

app.use("/api", cacheMiddleware, routes);

app.use("/", express.static(path.join(__dirname, "static")));

app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
