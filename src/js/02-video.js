import throttle from 'lodash.throttle';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Player from '@vimeo/player';
const VIDEOPLAYER_CURRENT_TIME='';

const iframe = document.querySelector('iframe');
const localPlayer = new Player(iframe);

const playerOn = function (data) {
  try {
    localStorage.setItem('VIDEOPLAYER_CURRENT_TIME', JSON.stringify(data));
  } catch (error) {
    console.error('Error: ', error.message);
  }
};

const throttlePlayerOn = throttle(playerOn, 1000);
localPlayer.on('timeupdate', throttlePlayerOn);

const CurrentTimePlay = function () {
  try {
    const getCurrentTime = localStorage.getItem('VIDEOPLAYER_CURRENT_TIME');
    const parseCurrentTime = JSON.parse(getCurrentTime);
    return parseCurrentTime.seconds;
  } catch (error) {
    console.error('Error: ', error.message);
  }
};

localPlayer.setCurrentTime(CurrentTimePlay());
