var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback/'
});

const scopes = [
  "user-top-read",
  "user-follow-read",
  "user-library-read",
  "user-library-modify",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-private",
  "playlist-read-collaborative"
].join(",");

const params = {
  scope: scopes,
  redirect_uri: 'http://localhost:3000/callback/',
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamString.toString();

export default spotifyApi;
export {LOGIN_URL};