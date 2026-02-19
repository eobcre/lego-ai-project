import { Router } from "express";
import { bedrock } from "../services/bedrock.js";

/* 
bedrock returns json format test
*/

export const nlpRouter = () => {
  const router = Router();

  router.post("/nlp", async (req, res) => {
    // user text validation
    try {
      const text = req.body?.text.trim();
      if (!text) {
        return res.status(400).json({ ok: false, error: "Text is required." });
      }

      // bedrock process
      const answer = await bedrock(text);

      // parse bedrock answer
      try {
        const answerParsed = JSON.parse(answer);
        return res.json({ ok: true, answerParsed, answer });
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
