import eventAllotmentWalksPlayer from '../events/eventAllotmentWalksPlayer';

/**
 * Обнуляет игровое поле
 */
export default function (thisData) {
  const gameData = thisData.state.gameData;
  const refs = thisData.refs;
  resetSpaceData();
  localStorage.setItem('gameData', JSON.stringify(gameData));

  refs.gameInfoSymbolX.classList.remove('game-info-players-symbol-active');
  refs.gameInfoSymbolO.classList.remove('game-info-players-symbol-active');

  setTimeout(() => {
    let gameSpace = refs.gameSpace;

    for (let row in gameSpace.children) {
      if (typeof gameSpace.children[row] === "object") {
        for (let cell in gameSpace.children[row].children) {
          if (typeof gameSpace.children[row].children[cell] === "object") {
            gameSpace.children[row].children[cell].innerHTML = `<br/>`;
            gameSpace.children[row].children[cell].setAttribute('class', 'game-space-cell game-space-cell-hover');
          }
        }
      }
    }

    gameData.eventBlock = false;
    eventAllotmentWalksPlayer(thisData);

    localStorage.setItem('gameData', JSON.stringify(gameData));
  }, 2000);

  function resetSpaceData() {
    let array = [];

    gameData.spaceData.forEach(row => {
      let arrayRow = [];
      row.forEach(cell => arrayRow.push(0));
      array.push(arrayRow)
    });

    gameData.spaceData = array;
  }
}