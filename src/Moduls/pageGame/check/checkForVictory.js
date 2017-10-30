import checkAllCells from './checkAllCells';
import gameLocalVictory from '../game/gameVictory';
import gameDraw from '../game/gameDraw';

/**
 *  Проверка на победителя, сначала собираются данные в функции checkAllCells,
 *  после чего если есть заполненная линия то дает одну победу тому кого эта линия,
 *  если поле будет заполнено то будет ничья, ну а если не победа
 *  не ничья то просто сохраняет данные в локальной истории
 */
export default function (thisData) {
  const gameData = thisData.state.gameData;
  const checkWin = checkAllCells(gameData.spaceSize, gameData.spaceData);

  if (checkWin !== undefined) {
    if (checkWin.indexWin === 1 || checkWin.indexWin === 2) {
      gameLocalVictory(thisData, checkWin.indexWin, checkWin.winsCells)
    }
    else if (checkWin === 'draw') {
      gameDraw(thisData);
    }
  }
  else {
    localStorage.setItem('gameData', JSON.stringify(gameData));
  }
}