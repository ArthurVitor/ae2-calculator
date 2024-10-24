import express from "express";
import dotenv from "dotenv";
import router from "./routes/ae2-router";

dotenv.config();

express.json();
const app = express();
const port = process.env.SERVER_PORT;


app.use("/api/ae2", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

