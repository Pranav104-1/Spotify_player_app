import axios from "axios";
import qs from "querystring";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let spotifyTokens = {
  accessToken: null,
  refreshToken: null,
  expiresAt: 0,
};

// Save tokens after login
export function saveTokens({ access_token, refresh_token, expires_in }) {
  spotifyTokens.accessToken = access_token;
  if (refresh_token) spotifyTokens.refreshToken = refresh_token;
  spotifyTokens.expiresAt = Date.now() + expires_in * 1000;
}

// Check if expired
function isExpired() {
  return Date.now() >= spotifyTokens.expiresAt;
}

// Refresh access token
async function refreshAccessToken() {
  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    qs.stringify({
      grant_type: "refresh_token",
      refresh_token: spotifyTokens.refreshToken,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      },
    }
  );

  saveTokens(res.data);
  console.log("Spotify token refreshed");
}

// Get valid access token
export async function getAccessToken() {
  if (!spotifyTokens.accessToken) {
    throw new Error("No Spotify token saved. Login first.");
  }

  if (isExpired()) {
    await refreshAccessToken();
  }

  return spotifyTokens.accessToken;
}

