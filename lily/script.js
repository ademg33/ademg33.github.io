function playAudio(id) {
    var audio = document.getElementById("audio" + id);
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio(id) {
    var audio = document.getElementById("audio" + id);
    audio.pause();
}
function enlarge(element) {
    element.style.transform = "scale(1.5)";
}