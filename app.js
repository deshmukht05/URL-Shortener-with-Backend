import express from "express";
import { shortenerURL } from "./routes/shortener.routes.js";
import { authRoutes } from "./routes/auth.routes.js";

const app = express();

const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(authRoutes);
app.use(shortenerURL);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
