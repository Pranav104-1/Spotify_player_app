import {
  getUserInfo,
  getUserPlaylists,
  getUserRecentlyPlayed,
  getUserSavedTracks,
  getUserTopArtists,
  getUserTopTracks,
} from "../controller/userInfo.controller.js";
import express from "express";
const router = express.Router();

router.get("/info", getUserInfo);
router.get("/playlists", getUserPlaylists);
router.get("/recently-played", getUserRecentlyPlayed);
router.get("/saved-tracks", getUserSavedTracks);
router.get("/top-tracks", getUserTopTracks);
router.get("/top-artists", getUserTopArtists);
export default router;
