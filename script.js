const knownKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];

function play_note(event) {
    if (knownKeys.includes(event.code)) {
        new Audio("audio/" + event.key.toUpperCase() + ".mp3").play();
    }
}

document.addEventListener("keydown", play_note);

document.addEventListener("mousedown", function (e) {
    console.log(e.relatedTarget + "clicked!");
});
