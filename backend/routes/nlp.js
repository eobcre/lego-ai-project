import { Router } from "express";
import { bedrock } from "../services/bedrock.js";
import { bedrockStub } from "../services/bedrockStub.js";
import { normalize } from "../normalize.js";

/* 
get powered-up hub object test
*/

export const nlpRouter = (getTrain) => {
  const router = Router();

  // console.log("getTrain:", getTrain());

  // api
  router.post("/nlp", async (req, res) => {
    try {
      const train = getTrain();

      const text = req.body?.text.trim();
      if (!text) {
        return res.status(400).json({ ok: false, error: "Text is required." });
      }

      // bedrock process
      // const answer = await bedrock(text);

      // test
      const answer = await bedrockStub(text);

      // parse bedrock answer
      // try {
      //   const answerParsed = JSON.parse(answer);
      //   return res.json({ ok: true, answerParsed, answer });
      // } catch (err) {
      //   console.error(err);
      //   return res.status(500).json({ ok: false });
      // }

      // test
      try {
        const answerParsed = JSON.parse(answer);
        const normalized = normalize(answerParsed);
        return res.json({ ok: true, answer, answerParsed, normalized });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ ok: false });
      }
    } catch (err) {
      console.error("NLP bedrock error:", err);
    }
  });

  return router;
};
