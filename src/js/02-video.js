import throttle from 'lodash.throttle';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Player from '@vimeo/player';
const LOCAL_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const localPlayer = new Player(iframe);



const playerOn = function (data) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

const throttlePlayerOn = throttle(playerOn, 1000);
localPlayer.on('timeupdate', throttlePlayerOn);

const CurrentTimePlay = function () {
  try {
    const getCurrentTime = localStorage.getItem(LOCAL_KEY);

    if (!getCurrentTime) {
      return;
    } else {
      const parseCurrentTime = JSON.parse(getCurrentTime);
      return parseCurrentTime.seconds
    };
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};


function checkSavedTime() {
  const getCurrentTime = localStorage.getItem(LOCAL_KEY);
    if (getCurrentTime) {
      localPlayer.setCurrentTime(CurrentTimePlay());
}
};

checkSavedTime();