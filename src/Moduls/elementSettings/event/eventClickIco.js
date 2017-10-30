import {sound, music} from '../../sound';

/**
 * Событие нажатия на иконки в меню настроек, чекает тип и включает выключает звук
 * после чего врубает или вырубает уровень громкости в объекте воспроизведения звука и
 * сохраняет состояние в локальную историю, ну шоб було =)
 */
export default function (thisSettings, type) {
  const gameSettings = thisSettings.state.gameSettings;

  if (type === 'sound') {
    gameSettings.soundState = (gameSettings.soundState) ? false : true;
    thisSettings.refs.settingsSoundRange.value = (gameSettings.soundState) ? gameSettings.soundVolume : 0;
    sound.changeVolume((gameSettings.soundState) ? gameSettings.soundVolume : 0);
  }

  if (type === 'music') {
    gameSettings.musicState = (gameSettings.musicState) ? false : true;
    thisSettings.refs.settingsMusicRange.value = (gameSettings.musicState) ? gameSettings.musicVolume : 0;
    music.changeVolume((gameSettings.musicState) ? gameSettings.musicVolume : 0);
  }

  thisSettings.setState({
    gameSettings
  });

  localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
}