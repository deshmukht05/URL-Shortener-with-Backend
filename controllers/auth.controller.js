import {
  createUser,
  generateToken,
  getUserByEmail,
  hashPassword,
  verifyPassword,
} from "../services/auth.services.js";

export const getRegisterPage = (req, res) => {
  if (req.user) return res.redirect("/");

  return res.render("auth/register", { errors: req.flash("errors") });
};

export const getLoginPage = (req, res) => {
  if (req.user) return res.redirect("/");

  return res.render("auth/login", { errors: req.flash("errors") });
};

export const postRegisterPage = async (req, res) => {
  if (req.user) return res.redirect("/");

  const { name, email, password } = req.body;
  const userExists = await getUserByEmail(email);

  if (userExists) {
    req.flash("errors", "User already exists.");
    return res.redirect("/register");
  }

  const hashedPassword = await hashPassword(password);
  const [user] = await createUser({ name, email, password: hashedPassword });
  console.log(user);

  res.redirect("/login");
};

export const postLogin = async (req, res) => {
  if (req.user) return res.redirect("/");

  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  console.log(user);

  if (!user) {
    req.flash("errors", "Invalid Email or Password");
    return res.redirect("/login");
  }

  const isPasswordValid = await verifyPassword(password, user.password);
  if (!isPasswordValid) {
    req.flash("errors", "Invalid Email or Password");
    return res.redirect("/login");
  }

  // res.cookie("isLoggedIn", true);

  const token = generateToken({
    id: user.id,
    name: user.name,
    email: user.email,
  });

  res.cookie("access_token", token);
  res.redirect("/");
};

export const getMe = async (req, res) => {
  if (!req.user) return res.send("Not Logged In.");
  return res.send(`<h1>Hey, ${req.user.name}</h1>`);
};

export const logoutUser = (req, res) => {
  res.clearCookie("access_token");
  res.redirect("login");
};

export const getAboutPage = (req, res) => {
  return res.render("about", {user: req.user})
}

export const getContactPage = (req, res) => {
  return res.render("contact", {
    user: req.user,
    error: null,
    success: null
  })
}

export const postContactPage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).render("contact", {
        user: req.user,
        success: null,
        error: "Please fill out all fields before submitting.",
      });
    }

    // Save to DB or send email here (e.g., Nodemailer / Mongoose / Drizzle)
    console.log("New contact submission:", { name, email, subject, message });

    return res.status(200).render("contact", {
      user: req.user,
      success: "Thanks for reaching out! We'll get back to you within 24 hours.",
      error: null,
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).render("contact", {
      user: req.user,
      success: null,
      error: "Something went wrong. Please try again later.",
    });
  }
};