# Song Player API Routes

## Authentication Routes
- **Login**: http://localhost:3000/auth/login
- **Callback**: http://localhost:3000/auth/callback
- **Get User Info**: http://localhost:3000/auth/me
- **Refresh Token**: http://localhost:3000/auth/refresh (POST)

## Player Routes (Playback Control)
- **Play**: http://localhost:3000/player/play (PUT)
- **Pause**: http://localhost:3000/player/pause (PUT)
- **Next Track**: http://localhost:3000/player/next (POST)
- **Previous Track**: http://localhost:3000/player/previous (POST)
- **Get Devices**: http://localhost:3000/player/devices (GET)
- **Transfer Device**: http://localhost:3000/player/transfer (PUT)
- **Set Volume**: http://localhost:3000/player/volume (PUT)
- **Toggle Shuffle**: http://localhost:3000/player/shuffle (PUT)
- **Set Repeat**: http://localhost:3000/player/repeat (PUT)
- **Get Current Track**: http://localhost:3000/player/current-track (GET)
- **Get Queue**: http://localhost:3000/player/queue (GET)
- **Add to Queue**: http://localhost:3000/player/add-to-queue (POST)

## User Info Routes
- **Get User Info**: http://localhost:3000/user/info (GET)
- **Get Playlists**: http://localhost:3000/user/playlists (GET)
- **Get Recently Played**: http://localhost:3000/user/recently-played (GET)
- **Get Saved Tracks**: http://localhost:3000/user/saved-tracks (GET)
- **Get Top Tracks**: http://localhost:3000/user/top-tracks (GET)
- **Get Top Artists**: http://localhost:3000/user/top-artists (GET)

## Home
- **Root**: http://localhost:3000/

## Notes
- GET requests can be tested directly in the browser address bar
- POST/PUT requests require tools like Postman, cURL, or Thunder Client
- Make sure to start your server before accessing these endpoints
