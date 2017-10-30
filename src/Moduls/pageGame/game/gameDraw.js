import gameLocalNewGame from './gameLocalNewGame';

/**
 *  Если выпала нечья то меняет фон всех ячеек и запускает новую игру
 */
export default function (thisData) {
  const gameData = thisData.state.gameData;
  const gameSpace = thisData.refs.gameSpace;
  gameData.eventBlock = true;

  for (let row in gameSpace.children) {
    if (typeof gameSpace.children[row] === "object") {
      for (let cell in gameSpace.children[row].children) {
        if (typeof gameSpace.children[row].children[cell] === "object") {
          gameSpace.children[row].children[cell].classList.add('game-space-cell-draw');
        }
      }
    }
  }

  gameLocalNewGame(thisData);
}