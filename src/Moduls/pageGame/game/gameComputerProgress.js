import checkForVictory from '../check/checkForVictory';
import eventAllotmentWalksPlayer from '../events/eventAllotmentWalksPlayer';
import {sound} from '../../sound/index';

/**
 *  Даже как то обидно что у ИИ меньше строк чем в стиле игрового поля =(
 *  Тут я не сильно заморачивался делая какого то хитрого и умного ИИ, так что просто идет
 *  проверка по всем ячейкам, и на первую пустую просто ИИ ставит нолик
 */
export default function (thisData) {
  const gameData = thisData.state.gameData;
  const refs = thisData.refs;

  if (gameData.eventBlock === true || gameData.modalWindowIsOpen === true) return;
  gameData.eventBlock = true;

  let indexCell = [];
  let cell;

  findSpareCell();

  cell = refs.gameSpace.children[indexCell[0]].children[indexCell[1]];

  localStorage.setItem('gameData', JSON.stringify(gameData));

  setTimeout(() => {
    cell.innerText = 'O';
    cell.classList.remove('game-space-cell-hover');
    cell.classList.add('game-space-cell-active');

    gameData.walks = 1;
    gameData.eventBlock = false;
    sound.playSound('O');

    eventAllotmentWalksPlayer(thisData);
    checkForVictory(thisData);
  }, 200);

  /**
   * Через рекурсию ищет ячейку куда втыкнуть свой нолик
   */
  function findSpareCell() {
    let randomRow = Math.floor(Math.random() * gameData.spaceSize);
    let randomCell = Math.floor(Math.random() * gameData.spaceSize);
    let cell = gameData.spaceData[randomRow][randomCell];

    if (cell === 0) {
      gameData.spaceData[randomRow][randomCell] = 2;
      indexCell = [randomRow, randomCell]
    }
    else {
      findSpareCell()
    }
  }
}