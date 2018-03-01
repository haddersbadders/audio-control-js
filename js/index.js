// These two lines create variables and fetch the videos from the HTML. Add more to fetch more videos
  var catfish = document.getElementById('catfish');
  var dance = document.getElementById('dance');

// Create functions (actions) to attach to each video on click

function toggleCatfish() {
  dance.pause();
  return catfish.paused ? catfish.play() : catfish.pause();
}


function toggleDance() {
  catfish.pause();
  return dance.paused ? dance.play() : dance.pause();
}
