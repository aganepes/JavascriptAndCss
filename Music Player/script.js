const playButton = document.querySelector("#btn-play");
const pauseButton = document.querySelector("#btn-pause");
const prevButton = document.querySelector("#btn-rewind");
const nextButton = document.querySelector("#btn-forward");
const progress = document.querySelector("#process");
const progressFill = progress.querySelector(".process-bar-fill");
const musicName = document.querySelector(".music-name");
const musicAuthor = document.querySelector(".music-author");
const musicImage = document.querySelector(".album-art");
const currentTimeEl = document.querySelector(".music-current-time");
const durationEl = document.querySelector(".music-duration");
import { songs } from "./data.js";

// current song index
let songIndex = 0;

// object audio
const audio = new Audio();

/**
 * @param {import("./data").Song} song
 * @returns {void}
 */
function loadSong(song) {
  musicName.innerText = song.name;
  musicAuthor.innerText = song.author;
  musicImage.src = song.cover;
	document.body.style.backgroundImage=`url(${song.cover})`;
  audio.src = song.src;

  // Print total duration when song is uploaded
  audio.addEventListener("loadedmetadata", () => {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationEl.innerText = `${durationMinutes}:${durationSeconds
      .toString()
      .padStart(2, "0")}`;
  });
}

// Upload the first song.
loadSong(songs[songIndex]);

audio.addEventListener("timeupdate", () => {
  // Update the progress bar (as a present)
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${progressPercent}%`;

  // Print the elapsed time (in 00:00 format)
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  currentTimeEl.innerText = `${currentMinutes}:${currentSeconds
    .toString()
    .padStart(2, "0")}`;
});

playButton.addEventListener("click", () => {
  playButton.classList.add("not_show");
  pauseButton.classList.remove("not_show");
  // music to play
  audio.play();
});
pauseButton.addEventListener("click", () => {
  pauseButton.classList.add("not_show");
  playButton.classList.remove("not_show");
  // music to pause
  audio.pause();
});

progress.addEventListener("click", (e) => {
  const styles = getComputedStyle(progress);
  const width = parseInt(styles.width);
  const clickX = e.offsetX;
  progressFill.style.width = clickX + "px";
  // music to change direction type
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

function addBlur() {
	musicImage.classList.add('imgBlur');
	setTimeout(()=>musicImage.classList.remove('imgBlur'),500);
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  audio.play();
  playButton.classList.add("not_show");
  pauseButton.classList.remove("not_show");
	// add animation
	addBlur();
}

audio.addEventListener("ended", nextSong);
nextButton.addEventListener("click", nextSong);

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  audio.play();

  playButton.classList.add("not_show");
  pauseButton.classList.remove("not_show");
	// add animation
	addBlur();
}
prevButton.addEventListener("click", prevSong);