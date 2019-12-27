import config from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import routes from "./server/routes/bookRoutes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use("/api/v1/books", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
