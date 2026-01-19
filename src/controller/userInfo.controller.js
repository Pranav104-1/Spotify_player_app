import axios from "axios";
import { getAccessToken } from "../utils/tokenManger.js";

export const getUserInfo = async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching user info: " + error.message);
    req.send("Error fetching user info: " + error.message);
  }
};
export const getUserPlaylists = async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching user playlists: " + error.message);
    req.send("Error fetching user playlists: " + error.message);
  }
};
export const getUserTopTracks = async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching user top tracks: " + error.message);
    req.send("Error fetching user top tracks: " + error.message);
  }
};
export const getUserTopArtists = async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/artists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching user top artists: " + error.message);
    req.send("Error fetching user top artists: " + error.message);
  }
};
export const getUserRecentlyPlayed = async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .send("Error fetching user recently played tracks: " + error.message);
    req.send("Error fetching user recently played tracks: " + error.message);
  }
};
export const getUserSavedTracks = async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching user saved tracks: " + error.message);

    req.send("Error fetching user saved tracks: " + error.message);
  }
};
