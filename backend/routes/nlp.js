import express from "express";

export const nlpRouter = () => {
  const router = express();

  router.post("/nlp", async (req, res) => {});

  return router;
};
