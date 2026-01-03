import express from "express";

const app = express();
const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log("Server is running.");
});

server.on("error", (err) => {
  console.error("Listen failed:", err);
});
