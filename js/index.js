const $video = document.querySelector("#Video-Principal");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $forward = document.querySelector("#forward");
const $backward = document.querySelector("#backward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);
$video.addEventListener('loadedmetadata', handleLoadMetadata);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);


function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

function handleBackward() {
  $video.currentTime = $video.currentTime - 10;
}

function handleForward() {
  $video.currentTime = $video.currentTime + 10.
}

function handleLoadMetadata() {
  $video.duration;
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

function handleInput() {
  $video.currentTime = $progress.value;
}