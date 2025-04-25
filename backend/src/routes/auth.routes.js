import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router= express.Router();

router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);

router.put("/update-profile", protectRoute, updateprofile)

export default router;