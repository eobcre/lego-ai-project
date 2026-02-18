import { Router } from "express";
import { bedrock } from "../services/bedrock.js";

export const nlpRouter = () => {
  const router = Router();

  router.post("/nlp", async (req, res) => {
    try {
      const text = req.body?.text.trim();
      if (!text) {
        return res.status(400).json({ ok: false, error: "Text is required." });
      }
      const answer = await bedrock(text);
      return res.json({ ok: true, answer });
    } catch (e) {
      return res.status(500).json({ ok: false, error: "Error." });
    }
  });

  return router;
};
