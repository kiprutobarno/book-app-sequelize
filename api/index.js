import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8000;

app.get("*", (req, res) =>
  res.status(200).send({ message: "Welcome to this API" })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
