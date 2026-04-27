import { Router } from "express";
import { bedrock } from "../services/bedrock.js";
import { bedrockStub } from "../services/bedrockStub.js";
import { normalize } from "../utils/normalize.js";
import { sleep } from "../utils/sleep.js";

/* 
nlp api
*/

export const nlpRouter = (getTrain) => {
  const router = Router();

  // console.log("getTrain:", getTrain());

  // api
  router.post("/nlp", async (req, res) => {
    try {
      const train = getTrain();
      console.log("getTrain:", getTrain());
      if (!train) {
        return res.status(503).json({ ok: false, error: "Train not ready." });
      }

      const text = req.body?.text.trim();
      if (!text) {
        return res.status(400).json({ ok: false, error: "Text is required." });
      }

      // bedrock process
      const answer = await bedrock(text);
      console.log("answer", answer);
      // test
      // const answer = await bedrockStub(text);
      // const answerParsed = JSON.parse(answer);
      // const normalized = await normalize(answerParsed);
      const answerParsed = await normalize(JSON.parse(answer));
      console.log("answerParsed:", answerParsed);
      console.log("answerParsed.action:", answerParsed.action);
      const normalized = await normalize(answerParsed);

      // speed
      switch (normalized.action) {
        case "forward":
          await train.forward(normalized.speed);
          break;

        case "backward":
          await train.backward(normalized.speed);
          break;

        case "stop":
          await train.stop();
          break;

        default:
          console.error("Unknown action:", normalized.action);
          await train.stop();
      }
      // durations ms
      await sleep(normalized.durationMs);
      await train.stop();

      return res.json({ ok: true, normalized });
    } catch (err) {
      console.error("NLP bedrock error:", err);
      return res.status(500).json({ ok: false, error: err });
    }
  });

  return router;
};
