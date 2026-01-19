import axios from "axios";
import { getAccessToken } from "../utils/tokenManger.js";

export const playSong = async (req, res) => {
  try {
    const token = await getAccessToken();
    axios.put(
      "https://api.spotify.com/v1/me/player/play",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.send("Playback started");
  } catch (error) {
    res.status(500).send("Error starting playback: " + error.message);
    req.send("Error starting playback: " + error.message);
  }
};

export const pauseSong = async (req, res) => {
  try {
    const token = await getAccessToken();
    axios.put(
      "https://api.spotify.com/v1/me/player/pause",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.send("Playback paused");
  } catch (error) {
    res.status(500).send("Error pausing playback: " + error.message);
    req.send("Error pausing playback: " + error.message);
  }
};

export const nextSong = async (req, res) => {
  try {
    const token = await getAccessToken();
    axios.post(
      "https://api.spotify.com/v1/me/player/next",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.send("Skipped to next song");
  } catch (error) {
    res.status(500).send("Error skipping song: " + error.message);
    req.send("Error skipping song: " + error.message);
  }
};

export const previousSong = async (req, res) => {
  try {
    const token = await getAccessToken();
    axios.post(
      "https://api.spotify.com/v1/me/player/previous",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.send("Went back to previous song");
  } catch (error) {
    res.status(500).send("Error going to previous song: " + error.message);
    req.send("Error going to previous song: " + error.message);
  }
};

export const Volume = async (req, res) => {
    const { volumePercent } = req.body;
    try {
        const token = await getAccessToken();
        axios.put(
            `https://api.spotify.com/v1/me/player/volume?volume_percent=${volumePercent}`,
            {}, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.send(`Volume set to ${volumePercent}%`);
    }
    catch (error) {
        res.status(500).send("Error setting volume: " + error.message);
        req.send("Error setting volume: " + error.message);
    }
};

export const Shuffle = async (req, res) => {
    const { state } = req.body;
    try {
        const token = await getAccessToken();
        axios.put(
            `https://api.spotify.com/v1/me/player/shuffle?state=${state}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.send(`Shuffle set to ${state}`);
    }
    catch (error) {
        res.status(500).send("Error setting shuffle: " + error.message);
        req.send("Error setting shuffle: " + error.message);
    }
};

export const Repeat = async (req, res) => {
    const { state } = req.body; 
    try {
        const token = await getAccessToken();
        axios.put(
            `https://api.spotify.com/v1/me/player/repeat?state=${state}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.send(`Repeat set to ${state}`);
    }
    catch (error) {
        res.status(500).send("Error setting repeat: " + error.message);
        req.send("Error setting repeat: " + error.message);
    }
};

export const devices = async (req, res) => {
    try {
        const token = await getAccessToken();
        const response = await axios.get(   
            "https://api.spotify.com/v1/me/player/devices",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.json(response.data);
    }
    catch (error) {
        res.status(500).send("Error fetching devices: " + error.message);
        req.send("Error fetching devices: " + error.message);
    }
};

export const transferDevice = async (req, res) => {
    const { deviceId } = req.body;
    try {
        const token = await getAccessToken();
        await axios.put(
            "https://api.spotify.com/v1/me/player",
            {
                device_ids: [deviceId],
                play: false,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.send(`Transferred playback to device ${deviceId}`);
    }

    catch (error) {
        res.status(500).send("Error transferring device: " + error.message);
        req.send("Error transferring device: " + error.message);
    }
};

export const playingCurrentTrack = async (req, res) => {
    try {
        const token = await getAccessToken();
        const response = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.json(response.data);
    }
    catch (error) {
        res.status(500).send("Error fetching current track: " + error.message);
        req.send("Error fetching current track: " + error.message);
    }
};

export const SeekPosition = async (req, res) => {
    const { positionMs } = req.body;
    try {
        const token = await getAccessToken();
        axios.put(
            `https://api.spotify.com/v1/me/player/seek?position_ms=${positionMs}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.send(`Seeked to position ${positionMs} ms`);
    }
    catch (error) {
        res.status(500).send("Error seeking position: " + error.message);
        req.send("Error seeking position: " + error.message);
    }
};

export const playerState = async (req, res) => {
    try {
        const token = await getAccessToken();
        const response = await axios.get(
            "https://api.spotify.com/v1/me/player",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.json(response.data);
    }
    catch (error) {
        res.status(500).send("Error fetching player state: " + error.message);
    }
};

export const getQueue = async (req, res) => {
    try {
        const token = await getAccessToken();
        const response = await axios.get(
            "https://api.spotify.com/v1/me/player/queue",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.json(response.data);
    }
    catch (error) {
        res.status(500).send("Error fetching queue: " + error.message);
    }
};

export const addToQueue = async (req, res) => {
    const { uri } = req.body;
    try {
        const token = await getAccessToken();
        await axios.post(
            `https://api.spotify.com/v1/me/player/queue?uri=${uri}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        res.send(`Added track to queue: ${uri}`);
    }
    catch (error) {
        res.status(500).send("Error adding to queue: " + error.message);
    }
};


