import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectTrain } from "./connectTrain.js";
import { nlpRouter } from "./routes/nlp.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

const PORT = process.env.PORT;

// server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// boot lego bluetooth
let train;

const bootLego = async () => {
  try {
    train = await connectTrain();
    // router
    app.use(
      "/api",
      nlpRouter(() => train),
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

bootLego();
