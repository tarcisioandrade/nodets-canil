import path from "path";

import mainRoutes from "@routes/index";
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
app.use(mainRoutes);

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`),
);
