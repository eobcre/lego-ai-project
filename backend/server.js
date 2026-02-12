import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectTrain } from "./connectTrain.js";
import { nlpRouter } from "./routes/nlp.js";

const app = express();
const PORT = process.env.PORT;
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// router
app.use(
  "/api",
  nlpRouter(() => train),
);

// boot lego bluetooth
let train;

const bootLego = async () => {
  try {
    train = await connectTrain({ portName: "B" });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

bootLego();
