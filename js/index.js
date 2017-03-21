
var olympia = document.getElementById('olympia');
var fallencity = document.getElementById('fallencity');


function playOlympia() {
  olympia.play();
  fallencity.pause();
}

function pauseOlympia() {
  olympia.pause();
}

function playFallencity() {
  fallencity.play();
  olympia.pause();
}

function pauseFallencity() {
  fallencity.pause();
}
