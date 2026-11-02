import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT) || 3000;
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(currentDir, "../public");

app.disable("x-powered-by");
app.use(express.static(publicDir, {
  etag: true,
  maxAge: process.env.NODE_ENV === "production" ? "1h" : 0,
}));

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    name: "ASTRAL",
    version: "0.1.0",
    engine: "not-integrated",
  });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`ASTRAL listening on port ${port}`);
});
