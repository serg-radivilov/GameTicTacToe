const initialState = {
  gameType: "computer",     // Играть с ии или игроком ('computer', 'player'), (default: 'computer')
  playerFirstName: "",      // Имя первого игрока (default: '')
  playerSecondName: "",     // Имя второго игрока (default: '')
  howManyWins: 3,           // До скольки побед будет игра (default: 3)
  spaceSize: 3,             // Размер поля (default: 3x3)
  walks: 1,                 // 1 - первый игрок, 2 - второй игрок (Кто будет ходить следующим ходом)
  eventBlock: false,        // Блокировка интерфейса при победе или ничьей (true блокировка, false отблокировка)
  victoryFirstPlayer: 0,    // Побед у 1 игрока
  victorySecondPlayer: 0,   // Побед у 2 игрока
  modalWindowIsOpen: false  // Состояние модального окна победы
};

const getLocalStorage = localStorage.getItem('gameData');
const gameLocalStorage = (getLocalStorage !== null) ? JSON.parse(getLocalStorage) : undefined;

if (gameLocalStorage !== undefined) {
  let playerOne = gameLocalStorage.victorySecondPlayer;
  let playerTwo = gameLocalStorage.victorySecondPlayer;
  let wins = gameLocalStorage.howManyWins;

  gameLocalStorage.eventBlock = (playerOne !== wins || playerTwo !== wins) ? false : true;
}

export default function gameDataStore(state = gameLocalStorage || initialState, action) {
  if (action.type === 'GAME_DATA') return state || action.gameData;
  if (action.type === 'NEW_GAME_DATA') return action.gameData;

  return state;
};