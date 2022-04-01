const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const REDIRECT_URI = "http://localhost:3000"
const urlGet = `${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`


let spotifyApi = new SpotifyWebApi();
let spotifyToken = window.localStorage.getItem("token");
if (spotifyToken) {
  spotifyApi.setAccessToken(spotifyToken);
}