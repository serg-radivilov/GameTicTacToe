import eventSelectNumberPlayers from './eventSelectNumberPlayers';

/**
 * Обнуляет настройки при клике на кнопку 'Обнулить настройки'
 */
export default function () {
  this.state.gameData = {
    gameType: "computer",
    playerFirstName: "",
    playerSecondName: "",
    howManyWins: 3,
    spaceSize: 3,
    walks: 1,
    eventBlock: false,
    victoryFirstPlayer: 0,
    victorySecondPlayer: 0,
  };

  eventSelectNumberPlayers(this.state.gameData, this.refs, 'computer');
  this.refs.inputOnePlayer.value = '';
  this.refs.inputTwoPlayer.value = '';
  this.refs.inputSelectSettings.value = this.state.gameData.howManyWins;
  this.refs.selectSelectSettings.value = this.state.gameData.spaceSize;
}