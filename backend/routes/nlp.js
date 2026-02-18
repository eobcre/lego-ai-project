import { Router } from "express";

export const nlpRouter = () => {
  const router = Router();

  router.post("/nlp", async (req, res) => {
    res.json({
      ok: true,
      message: "You made it!"
    })
  });

  return router;
};










