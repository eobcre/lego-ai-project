import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectTrain } from "./train/connectTrain.js";
import { controlTrain } from "./train/controlTrain.js";
import { nlpRouter } from "./routes/nlp.js";

/* 
- bluetooth connection
- server starts after the bluetooth connection
*/

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

const PORT = process.env.PORT;

// boot lego bluetooth
let train;

const bootLego = async () => {
  try {
    const hub = await connectTrain();
    train = await controlTrain(hub);

    app.use(
      "/api",
      nlpRouter(() => train),
    );

    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

bootLego();
