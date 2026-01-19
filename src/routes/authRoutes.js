import express from "express";
import {
  login,
  callback,
  refreshToken
} from "../controller/auth.controller.js";

import { getAccessToken } from "../utils/tokenManger.js";
import axios from "axios";

const router = express.Router();

router.get("/me", async (req, res) => {
  try {
    const token = await getAccessToken();
    const result = await axios.get("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    res.json(result.data);
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
});

router.get("/login", login);
router.get("/callback", callback);
router.post("/refresh", refreshToken);

export default router;
