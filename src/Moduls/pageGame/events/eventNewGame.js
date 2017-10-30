import {browserHistory} from 'react-router';

/**
 * Ну тут все просто, просто функция которая запускает игру заново
 * событие нажатия на кнопку "Новая игра" после победы и во время игры
 * Обнуляет основные настройки и чистит кеш локальной истории
 */
export default function () {
  if (this.state.gameData.eventBlock === true) return;

  this.state.gameData.modalWindowIsOpen = false;

  this.props.dispatch({type: 'NEW_GAME_DATA', gameData: this.state.gameData});

  localStorage.removeItem('gameData');

  browserHistory.push('/start')
}