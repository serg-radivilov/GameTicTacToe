import checkForVictory from '../check/checkForVictory';
import eventAllotmentWalksPlayer from './eventAllotmentWalksPlayer';
import {sound} from '../../sound/index';

/**
 *  Событие нажатия на ячейки, для простоты тут делегирование событий, если будет клик на заполненую ячейку
 *  то функция остановиться, но если нет то будет заполняться данная ячейка, ну и у той ячейки на которую
 *  жмакнули будет меняться стиль ну и бла бла бла
 */
export default function (event) {
  if (event.target.classList[0] !== 'game-space-cell' || this.state.gameData.eventBlock === true) return;

  const value = event.target.attributes.value.value;
  const spaceData = this.state.gameData.spaceData;

  if (spaceData[value.split('-')[0]][value.split('-')[1]] === 0 && this.state.gameData.eventBlock === false) {
    spaceData[value.split('-')[0]][value.split('-')[1]] = this.state.gameData.walks;

    event.target.innerText = (this.state.gameData.walks === 1) ? 'X' : 'O';
    event.target.classList.remove('game-space-cell-hover');
    event.target.classList.add('game-space-cell-active');

    if (this.state.gameData.walks === 1) {
      this.state.gameData.walks = 2;
      sound.playSound('X');
    }
    else {
      this.state.gameData.walks = 1;
      sound.playSound('O');
    }

    checkForVictory(this);
    eventAllotmentWalksPlayer(this);
  }
}