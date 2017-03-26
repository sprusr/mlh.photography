var CHANGE_INTERVAL = 6000;

function getPhoto() {
  //return a random photo from the /images directory
}

function getCaption() {
  //return a random caption
}

document.addEventListener("DOMContentLoaded", function(event) {
  setInterval(function() {
    document.getElementById("image").style.background = "url('" + getPhoto() + "')";
    document.getElementById("caption").innerHTML = getCaption();
  }, CHANGE_INTERVAL);
});
