import path from "path";

import express from "express";
import mustache from "mustache-express";

require("dotenv").config();

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());

// Routes

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`),
);
