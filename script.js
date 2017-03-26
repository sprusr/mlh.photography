var CHANGE_INTERVAL = 8000;
var currPhoto = 0;
var currQuote = 0;

var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
]

var quotes = [
    "Ballin' on a budget",
    "<insert name here> for MVP",
    "Looking forward to <insert hackathon here> this weekend",
    "My drone's so heavy",
    "You wanna come see my drone?",
    "I should probably take some pictures",
    "I'm the official MLH photographer",
    "Do you want to go to the pub later?",
    "#dronephotography",
    "#ballin",
]

function getPhoto() {
  // Return a file name string for image
  var randomPhoto = images[currPhoto];
  if (currPhoto < images.length) {
      currPhoto++;
  }
  else {
      images = shuffle(images);
      currPhoto = 0;
  }
  return randomPhoto;
}

function getCaption() {
  // Return a random caption - string
  var randomQuote = quotes[currQuote];
  if (currQuote < images.length) {
      currQuote++;
  }
  else {
      quotes = shuffle(quotes);
      currQuote = 0;
  }
  return randomQuote;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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

images = shuffle(images);
quotes = shuffle(quotes);
