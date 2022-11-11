import { Router } from "express";
import axios from "axios";
import { JDOODLE, JDOODLE_URL } from "../config.keys";
import { getLanguageVersion, getLanguage } from "../utils/getLanguageVersion";
import { filterQuestions, renderQuestion } from "../utils/databaseQueries";
import { scrapeQuestion } from "../utils/scrapeQuestion";

const router = Router();


router.get("/auth", (req, res) => {
  if (!req.user) {
    return res.status(200).json({
      isLoggedIn: false,
      message: "User is not logged in.",
      user: {
        name: "",
        image_link: "",
      },
      
    });
  } else {
    return res.status(200).json({
      isLoggedIn: true,
      message: "User is logged in",
      user: req.user,
      
    });
  }
});

// auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.send({ message: "Successfully logged out" });
});