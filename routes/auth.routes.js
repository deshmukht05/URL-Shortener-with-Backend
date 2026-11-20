import { Router } from "express";
import * as authControllers from "../controllers/auth.controller.js";

const router = Router();

// router.get("/register", authControllers.getRegisterPage)
// // router.get("/login", authControllers.getLoginPage);

router
  .route("/register")
  .get(authControllers.getRegisterPage)
  .post(authControllers.postRegisterPage);

router
  .route("/login")
  .get(authControllers.getLoginPage)
  .post(authControllers.postLogin);

router.route("/about").get(authControllers.getAboutPage)
router.route("/contact").get(authControllers.getContactPage)

router.route("/me").get(authControllers.getMe);

router.route("/logout").get(authControllers.logoutUser)

export const authRoutes = router;
