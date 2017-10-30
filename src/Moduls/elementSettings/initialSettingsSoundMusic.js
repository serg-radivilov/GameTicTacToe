import {sound, music} from '../sound';

/**
 * Выставляет уровень громкости звуков и музыки при загрузке странички
 */
export default function (gameSettings) {
  sound.changeVolume((gameSettings.soundState) ? gameSettings.soundVolume : 0);
  music.playTrack();
  music.changeVolume((gameSettings.musicState) ? gameSettings.musicVolume : 0);
}
