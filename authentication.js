//## Get the token from the URL
const urlHash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

history.pushState(
  "",
  document.title,
  window.location.pathname + window.location.search
);

//## Set token (if its there)
const _token = urlHash.access_token;
const authEndpoint = "https://accounts.spotify.com/authorize";

//## Oauth header items
const clientId = "8a4b95979af84798b6ed958934fc2296";
// const redirectUri = 'https://spotify-metadata.netlify.app/';
const redirectUri = "https://uphot.netlify.app/";

const scopes = ["user-top-read", "playlist-read-private", "user-library-read"];

const loginURL = "https://uphot.netlify.app/login.html";

//if no token and not on login page, redirect to login
// if (!_token && window.location != loginURL) {
//   console.log("not login");
//   window.location = loginURL;
// }

//on click, send user to spotify auth flow
function sendToAuth() {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
}
