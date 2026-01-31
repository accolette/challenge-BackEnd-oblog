// ================== IMPORTS ==================
// === Natifs ===
import path from "node:path";
import { fileURLToPath } from "node:url";
// === Tiers ===
import "dotenv/config";
import express from "express";
// === Users ===
import homeRouter from "./app/routes/home.route.js";
import articlesRouter from "./app/routes/articles.route.js";

// ================== CONFIG ==================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));
app.use(express.static(path.join(__dirname, "public")));

// ================== ROUTERS ==================
app.use(homeRouter);
app.use("/articles", articlesRouter);

// ================== LISTENER ==================
app.listen(3000, () => {
  console.log("Le serveur tourne sur http://localhost:3000/");
});
