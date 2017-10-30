import gameComputerProgress from '../game/gameComputerProgress';

/**
 *  Выдиляет в верхней части в панели информации об состоянии игры игрока чей ход будет следующий
 *  если будет ничья или победа кого либо то не будет показывать чей ход, для эстетичности
 */
export default function (thisData) {
  const gameData = thisData.state.gameData;
  const refs = thisData.refs;

  if (gameData.eventBlock === true) return;

  if (gameData.walks === 1) {
    refs.gameInfoSymbolX.classList.add('game-info-players-symbol-active');
    refs.gameInfoSymbolO.classList.remove('game-info-players-symbol-active');
  }
  if (gameData.walks === 2) {
    refs.gameInfoSymbolX.classList.remove('game-info-players-symbol-active');
    refs.gameInfoSymbolO.classList.add('game-info-players-symbol-active');

    if (gameData.gameType === 'computer' && gameData.walks === 2) gameComputerProgress(thisData);
  }
};