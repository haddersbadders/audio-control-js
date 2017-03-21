
  var olympia = document.getElementById('olympia');
  var fallencity = document.getElementById('fallencity');

  // function playOlympia() {
  //   olympia.play();
  // }
  // 
  // function pauseOlympia() {
  //   olympia.pause();
  // }

function toggleOlympia() {
  fallencity.pause();
  return olympia.paused ? olympia.play() : olympia.pause();
}


function toggleFallencity() {
  olympia.pause();
  return fallencity.paused ? fallencity.play() : fallencity.pause();
}
