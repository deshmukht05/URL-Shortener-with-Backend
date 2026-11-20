import express from "express";
import { shortenerURL } from "./routes/shortener.routes.js";
import { authRoutes } from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import { verifyAuthentication } from "./middlewares/verify-auth-middleware.js";
import session from "express-session";
import flash from "connect-flash";

const app = express();

const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(cookieParser());
app.use(session({
  secret: "my-secret", resave: true, saveUninitialized: false
}))
app.use(flash())
app.use(verifyAuthentication);

app.use((req, res, next) => {
  res.locals.user = req.user;
  return next();
})

app.use(authRoutes);
app.use(shortenerURL);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
