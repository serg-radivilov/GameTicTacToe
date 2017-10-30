import gameLocalNewGame from './gameLocalNewGame';

/**
 *  Функция победы, чекает на победу, и меняет фон победных ячеек, и так же чекает на общую победу,
 *  если была общая победа то выводит модальное окно с победителем
 */
export default function (thisData, indexPlayer, winCells) {
  const gameData = thisData.state.gameData;
  const refs = thisData.refs;
  const gameSpace = refs.gameSpace;

  gameData.eventBlock = true;

  for (let row in gameSpace.children) {
    if (typeof gameSpace.children[row] === "object") {
      for (let cell in gameSpace.children[row].children) {
        if (typeof gameSpace.children[row].children[cell] === "object") {
          gameSpace.children[row].children[cell].classList.remove('game-space-cell-hover');
        }
      }
    }
  }

  winCells.forEach(indexCell => {
    gameSpace.children[indexCell.split('-')[0]].children[indexCell.split('-')[1]].classList.add('game-space-cell-win');
  });

  addVictoryToPlayer();

  // Проверка на общую победу
  if (gameData.victoryFirstPlayer === gameData.howManyWins || gameData.victorySecondPlayer === gameData.howManyWins) {
    setTimeout(() => {
      gameData.modalWindowIsOpen = true;
      gameData.eventBlock = false;
      localStorage.setItem('gameData', JSON.stringify(gameData));
      thisData.setState({gameData});
    }, 500)
  }
  else {
    gameLocalNewGame(thisData);
  }

  function addVictoryToPlayer() {
    if (indexPlayer === 1) gameData.victoryFirstPlayer++;
    if (indexPlayer === 2) gameData.victorySecondPlayer++;
    refs.gameInfoScoreX.innerText = gameData.victoryFirstPlayer;
    refs.gameInfoScoreO.innerText = gameData.victorySecondPlayer;

    localStorage.setItem('gameData', JSON.stringify(gameData));
  }
}