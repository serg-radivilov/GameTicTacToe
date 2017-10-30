import React from 'react';
import {connect} from 'react-redux';

import eventSelectNumberPlayers from './events/eventSelectNumberPlayers';
import eventStartGame from './events/eventStartGame';
import eventClearSettings from './events/eventClearSettings';
import './style/index.css';

class start extends React.Component {
  constructor(state, props) {
    super(state, props);

    this.state = {
      gameData: this.props.getGameData
    };
  }

  componentDidMount() {
    eventSelectNumberPlayers(this.state.gameData, this.refs);
  }

  render() {
    return (
      <div className="container-start">
        <div className="start-select-players">
          <div className="start-select-players-blocks">
            <button className="start-select-players-button" ref="btnOnePlayer"
                    onClick={() => eventSelectNumberPlayers(this.state.gameData, this.refs, 'computer')}
            >
              Играть с компьютером
            </button>
            <input className="start-select-players-input" type="text" ref="inputOnePlayer"
                   defaultValue={(this.state.gameData.playerFirstName !== 'Игрок 1')
                     ? this.state.gameData.playerFirstName : ''} maxLength="12" placeholder="Игрок 1"
                   onChange={(event) => this.state.gameData.playerFirstName = event.target.value}/>
          </div>
          <div className="start-select-players-blocks">
            <button className="start-select-players-button" ref="btnTwoPlayer"
                    onClick={() => eventSelectNumberPlayers(this.state.gameData, this.refs, 'player')}
            >
              Игра на двоих
            </button>
            <input className="start-select-players-input" type="text" ref='inputTwoPlayer'
                   defaultValue={(this.state.gameData.playerSecondName !== 'Игрок 2')
                     ? this.state.gameData.playerSecondName : ''} maxLength="12" placeholder="Игрок 2"
                   onChange={(event) => this.state.gameData.playerSecondName = event.target.value}/>
          </div>
        </div>

        <hr className="start-hr"/>

        <div className="start-select-settings">
          <div className="start-select-settings-blocks">
            <div className="start-select-settings-title">До скольки побед:</div>
            <input className="start-select-settings-input" type="number" ref="inputSelectSettings"
                   defaultValue={this.state.gameData.howManyWins}
                   onChange={(event) => this.state.gameData.howManyWins = +event.target.value}/>
          </div>

          <div className="start-select-settings-blocks">
            <div className="start-select-settings-title">Размер поля:</div>
            <select className="start-select-settings-select" ref='selectSelectSettings'
                    defaultValue={this.state.gameData.spaceSize}
                    onChange={(event) => this.state.gameData.spaceSize = +event.target.value}>
              <option value="3">3x3</option>
              <option value="5">5x5</option>
              <option value="7">7x7</option>
              <option value="9">9x9</option>
            </select>
          </div>
        </div>

        <hr className="start-hr"/>

        <div className="btn-block">
          <button className="btn-clear" onClick={eventClearSettings.bind(this)}>Обнулить настройки</button>
          <button className="btn-start" onClick={eventStartGame.bind(this)}>Начать игру</button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    getGameData: state.gameData
  }),
)(start);