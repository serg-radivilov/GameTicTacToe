import {sound, music} from '../../sound';

/**
 * Событие ползунка в меню настроек, чекает тип и изменяет состояние громкости данного типа
 * после чего меняет уровень громкости в объекте воспроизведения звука и сохраняет состояние
 * в локальную историю
 */
export default function (thisSettings, event, type) {
  const value = event.target.value;
  const gameSettings = thisSettings.state.gameSettings;

  if (type === 'sound') {
    gameSettings.soundVolume = value;
    gameSettings.soundState = (value > 0) ? true : false;
    sound.changeVolume(value);
  }

  if (type === 'music') {
    gameSettings.musicVolume = value;
    gameSettings.musicState = (value > 0) ? true : false;
    music.changeVolume(value)
  }

  thisSettings.setState({
    gameSettings
  });

  localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
}