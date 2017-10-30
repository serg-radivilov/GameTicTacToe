/**
 * Переключение кнопок (один / два игрока)
 */
export default function (gameData, refs, value) {
  if (value !== undefined) gameData.gameType = value;

  if (gameData.gameType === 'computer') {
    gameData.gameType = 'computer';
    refs.btnOnePlayer.style.boxShadow = '0 0 5px rgba(0, 0, 0, 1)';
    refs.btnTwoPlayer.style.boxShadow = 'none';
    refs.inputTwoPlayer.style.display = 'none';
  }
  else {
    gameData.gameType = 'player';
    refs.btnOnePlayer.style.boxShadow = 'none';
    refs.btnTwoPlayer.style.boxShadow = '0 0 5px rgba(0, 0, 0, 1)';
    refs.inputTwoPlayer.style.display = 'block';
  }
}