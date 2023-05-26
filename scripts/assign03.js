
var all_audio = ["./scripts/ambient-classical-guitar-144998.mp3", "./scripts/floating-abstract-142819.mp3", "./scripts/modern-vlog-140795.mp3", "./scripts/smoke-143172.mp3"];
var num = 0;
var shuf = false;
var duration = 0;
var duration_in_minutes = 0;
var duration_in_seconds = 0;
var currentTime_in_minutes = 0;
var currentTime_in_seconds = 0;
var duration_element = document.querySelector(".duration");
var currentTime_element = document.querySelector(".currentTime");
var range_value = document.querySelector("input[type=range]");

// change slider value with song playing and current time that appears on screen
audioo.addEventListener('timeupdate', () => {
    range_value.value = audioo.currentTime / audioo.duration * 100;
    currentTime_in_seconds = Math.floor(Number(audioo.currentTime) % 60);
    currentTime_in_minutes = Math.floor(Number(audioo.currentTime) / 60);
    currentTime_element.innerHTML = `${currentTime_in_minutes}:${currentTime_in_seconds}`;
    console.log('Current time: ' + audioo.currentTime);
});
audioo.onloadedmetadata = getDuration;

var rep = false;
function change_song(num) {
    sourcee.src = all_audio[num];
    console.log(`${sourcee.src}`);
    para.innerHTML = `current song ${num + 1}`;
    audioo.load();
    audioo.play();
    console.log("changed");




}
function getDuration() {
    duration = audioo.duration;
    duration_in_minutes = Math.floor(Number(audioo.duration) / 60);
    duration_in_seconds = Math.floor(Number(audioo.duration) % 60);
    console.log(duration_in_minutes);
    duration_element.innerHTML = `${duration_in_minutes}:${duration_in_seconds}`;

}
function repeatf() {
    if (num < all_audio.length) {

        change_song(num);
        num++;
    }
    else {
        num = 0;
        change_song(num);
    }
    console.log('played');
}

function shufflef() {


    num = Math.round(Math.random() * 3);
    change_song(num);

}

// repeat button
repeat.addEventListener("click", _ => {
    shuf = false;
    rep = true;
    repeatf();
});


// play button
play.addEventListener("click", _ => change_song(0));

// suffle button
shuffle.addEventListener("click", _ => {
    shuf = true;
    rep = false;
    shufflef();
});
// song end
audioo.addEventListener("ended", _ => {
    if (shuf) {
        shufflef();
    } else if (rep) {
        repeatf();
    }
});




range_value.addEventListener("input", _ => audioo.currentTime = range_value.value/100 * audioo.duration);















// click song name
song1.addEventListener("click", _ => {
    shuf = false;
    rep = false;
    change_song(0);
});
song2.addEventListener("click", _ => {
    shuf = false;
    rep = false;
    change_song(1);
});
song3.addEventListener("click", _ => {
    shuf = false;
    rep = false;
    change_song(2);
});
song4.addEventListener("click", _ => {
    shuf = false;
    rep = false;
    change_song(3);
});