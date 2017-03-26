var CHANGE_INTERVAL = 8000;

function getPhoto() {
  // Return a file name string for image
  var images = [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "",

  ]

  var randomPhoto = images[Math.floor(Math.random() * images.length)];
  console.log(randomPhoto);
  return randomPhoto;
}

function getCaption() {
  // Return a random caption - string
  var quotes = [
      "Ballin' on a budget",
      "<insert name here> for MVP",
      "Looking forward to <insert hackathon here> this weekend",
      "My drone's so heavy",
      "You wanna coem see my drone?",
      "I should probably take some pictures",
      "I'm the official MLH photographer",
  ]
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(randomQuote);
  return randomQuote;
}

function setPhotoAndQuote() {
  document.getElementById("image").style.backgroundImage = "url('" + getPhoto() + "')";
  document.getElementById("caption").innerHTML = getCaption();
}

document.addEventListener("DOMContentLoaded", function(event) {
  setPhotoAndQuote();
  setInterval(function() {
    setPhotoAndQuote();
  }, CHANGE_INTERVAL);
});
