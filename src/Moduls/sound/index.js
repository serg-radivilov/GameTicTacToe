import srcSoundEntryX from './src/sound_entry_x.mp3';
import srcSoundEntryO from './src/sound_entry_o.mp3';

import bartonSprings from './src/music/Barton_Springs.mp3';
import breaktimeSilentFilmLight from './src/music/Breaktime_Silent_Film_Light.mp3';
import cartoonHoedown from './src/music/Cartoon_Hoedown.mp3';
import dogAndPonyShow from './src/music/Dog_and_Pony_Show.mp3';
import gaslampFunworks from './src/music/Gaslamp_Funworks.mp3';
import hammockFight from './src/music/Hammock_Fight.mp3';
import onTheBach from './src/music/On_the_Bach.mp3';
import pathToFollow from './src/music/Path_to_Follow.mp3';

/**
 *  Плейлист музыки
 */
const musicFortData = [
  {
    src: bartonSprings,
    time: 106000
  },
  {
    src: breaktimeSilentFilmLight,
    time: 126000
  },
  {
    src: cartoonHoedown,
    time: 93000
  },
  {
    src: dogAndPonyShow,
    time: 93000
  },
  {
    src: gaslampFunworks,
    time: 148000
  },
  {
    src: hammockFight,
    time: 41000
  },
  {
    src: onTheBach,
    time: 65000
  },
  {
    src: pathToFollow,
    time: 67000
  },
];

/**
 *  Объект с звуками при выставлении крестика или нолика
 */
export const sound = {
  sound: new Audio(),

  /**
   * Проигрование самого звука
   */
  playSound(type) {
    this.sound.preload = 'auto';
    this.sound.src = (type === 'X' ? srcSoundEntryX : srcSoundEntryO);
    this.sound.play();
  },

  /**
   *  Выставляет громкость проигрывание звуков
   */
  changeVolume(value) {
    this.sound.volume = value / 100;
  }
};

/**
 *  Объект для воспроизведения музыки
 */
export const music = {
  music: new Audio(),

  /**
   * Воспроизведение самой музыки, берет рандомную в плейлисте и запускает ее и так же на таймер вешает время
   * по истечению которого запуститься следующий трек
   */
  playTrack() {
    const track = musicFortData[Math.floor(Math.random() * musicFortData.length)];
    this.music.preload = 'auto';
    this.music.src = track.src;
    this.music.play();
    this.switchinGtracks(track.time);
  },

  /**
   *  Выставляет громкость проигрывание музыки
   */
  changeVolume(value) {
    this.music.volume = value / 100;
  },

  /**
   * Таймер для смены треков
   */
  switchinGtracks(time) {
    setTimeout(() => {
      this.playTrack();
    }, time)
  }
};