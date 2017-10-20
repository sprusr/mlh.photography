var CHANGE_INTERVAL = 8000;
var currPhoto = 0;
var currQuote = 0;
var totalLoads = 0;
var firstLoad = true;
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
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
];

var loadedImages = [
  loadImage("images/1.jpg"),
  loadImage("images/2.jpg"),
  loadImage("images/3.jpg"),
  loadImage("images/4.jpg"),
  loadImage("images/5.jpg"),
  loadImage("images/6.jpg"),
  loadImage("images/7.jpg"),
  loadImage("images/8.jpg"),
  loadImage("images/9.jpg"),
  loadImage("images/10.jpg"),
  loadImage("images/11.jpg"),
  loadImage("images/12.jpg"),
];



function loadImage(source) {
  var image = new Image();
  image.src = source;
  image.onload = function () { totalLoads++ };

  return image.src;
}

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
  "I'm hacking at a hackathon",
  "MLH money",
];

function getPhoto() {
  // Return a file name string for image
  randomPhoto = loadedImages[currPhoto];
  if (currPhoto < images.length - 1) {
    currPhoto++;
  } else {
    images = shuffle(images);
    currPhoto = 0;
  }
  return randomPhoto;
}

function getCaption() {
  // Return a random caption - string
  var randomQuote = quotes[currQuote];
  if (currQuote < images.length - 1) {
    currQuote++;
  } else {
    quotes = shuffle(quotes);
    currQuote = 0;
  }
  return randomQuote;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

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

function checkFirstTime(){
  if(firstLoad == true){
    waitTime = 1000;
    firstLoad = false;
  }else{
    waitTime = 0;
  }

  return waitTime;
}

function setPhotoAndQuote() {
  var waitTime = checkFirstTime();
  setTimeout( function () {
    if(totalLoads === loadedImages.length){
      document.getElementById("image").style.backgroundImage =
        "url('" + getPhoto() + "')";
      document.getElementById("caption").innerHTML = '"' + getCaption() + '"';
    }else{
      document.getElementById("caption").innerHTML = '"' + "Loading..." + '"';
    }
  }, waitTime);
}

document.addEventListener("DOMContentLoaded", function(event) {
  setPhotoAndQuote();
  document.getElementById("image").style.animation =
    "imagescroll " + CHANGE_INTERVAL / 1000 + "s infinite linear";
  document.getElementById("caption").style.animation =
    "captionfade " + CHANGE_INTERVAL / 1000 + "s infinite linear";
  setInterval(function() {
    setPhotoAndQuote();
  }, CHANGE_INTERVAL);
});

images = shuffle(images);
quotes = shuffle(quotes);
