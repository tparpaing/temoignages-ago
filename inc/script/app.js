let pause = document.querySelector('.pause');
pause.style.display = "none";

let nowPlaying = null;

pause.addEventListener('click', (event) => {
    event.preventDefault();
    reset();
});

Array.from(document.querySelectorAll('#buttons div button')).forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        reset();
        displayPause();
        elem.className = "active";
        playCategory(elem.id);
    });
    content = elem.innerHTML;
    elem.innerHTML = "<i class=\"fa-solid fa-circle-play\"></i>" + content;
});

function playCategory(file) {
    if (nowPlaying === null) {
        nowPlaying = new Audio(document.getElementById(`a-${file}`));
        console.log(nowPlaying);
        nowPlaying.play();
        console.log('Now Playing : ' + file);
    }
}

function displayPause() {
    let statusDisplay = pause.style.display;
    if (statusDisplay === "none") {
        pause.style.display = "block";
    }
}

function hidePause() {
    let statusDisplay = pause.style.display;
    if (statusDisplay === "block") {
        pause.style.display = "none";
    }
}

function stopAllMedia() {
    if (nowPlaying !== null) {
        nowPlaying.pause();
        hidePause();
        nowPlaying = null;
    }
}

function reset() {
    hidePause();
    stopAllMedia();
    Array.from(document.querySelectorAll('.active')).forEach((elem) => {
        elem.className = "";
    });
}
