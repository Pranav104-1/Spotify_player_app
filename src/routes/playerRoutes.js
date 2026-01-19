import {
  addToQueue,
  devices,
  getQueue,
  nextSong,
  pauseSong,
  playingCurrentTrack,
  playSong,
  previousSong,
  Repeat,
  Shuffle,
  transferDevice,
  Volume,
} from "../controller/audioPlayer.Controller.js";

import express from "express";
const router = express.Router();

router.put("/play", playSong);
router.put("/pause", pauseSong);
router.post("/next", nextSong);
router.post("/previous", previousSong);
router.get("/devices", devices);
router.put("/transfer", transferDevice);
router.put("/volume", Volume);
router.put("/shuffle", Shuffle);
router.put("/repeat", Repeat);
router.get("/current-track", playingCurrentTrack);
router.get("/queue", getQueue);
router.post("/add-to-queue", addToQueue);

export default router;
