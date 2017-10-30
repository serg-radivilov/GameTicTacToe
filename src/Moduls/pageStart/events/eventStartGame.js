import {browserHistory} from 'react-router';

/**
 * Передает настройки в redux и переходит на страничку с игрой
 */
export default function () {
  let gameData = this.state.gameData;

  gameData.spaceData = [];

  for (let indexRow = 0; indexRow < gameData.spaceSize; indexRow++) {
    let rows = [];
    for (let indexCell = 0; indexCell < gameData.spaceSize; indexCell++) rows.push(0);
    gameData.spaceData.push(rows);
  }

  gameData.eventBlock = false;
  gameData.walks = 1;
  gameData.victoryFirstPlayer = 0;
  gameData.victorySecondPlayer = 0;
  gameData.playerFirstName = (gameData.playerFirstName !== '') ? gameData.playerFirstName : 'Игрок 1';
  gameData.playerSecondName = (gameData.playerSecondName !== '') ? gameData.playerSecondName : 'Игрок 2';

  this.props.dispatch({type: 'GAME_DATA', gameData: gameData});

  localStorage.setItem('gameData', JSON.stringify(gameData));

  browserHistory.push('/game');
}