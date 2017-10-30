import React from 'react';
import {connect} from 'react-redux';
import ModalWindow from 'react-modal';

import eventElementsSize from './events/eventElementsSize';
import eventAllotmentWalksPlayer from './events/eventAllotmentWalksPlayer';
import eventClickCells from './events/eventClickCells';
import eventNewGame from './events/eventNewGame';
import './style/index.css';

class game extends React.Component {
  constructor(state, props) {
    super(state, props);

    this.state = {
      gameData: this.props.getGameData
    };
  }

  componentDidMount() {
    eventElementsSize(this.refs);
    eventAllotmentWalksPlayer(this);

    window.addEventListener('resize', () => {
      eventElementsSize(this.refs)
    });
  }

  /**
   * Вычисляет по календарю майя победителя
   */
  modalWindowPlayerVictory() {
    const victoryFirstPlayer = this.state.gameData.victoryFirstPlayer;
    const victorySecondPlayer = this.state.gameData.victorySecondPlayer;
    const playerFirstName = this.state.gameData.playerFirstName;
    const playerSecondName = this.state.gameData.playerSecondName;
    const fixPlayerSecondName = (this.state.gameData.gameType === 'player') ? playerSecondName : 'Компьютер';

    return (victoryFirstPlayer > victorySecondPlayer) ? playerFirstName.toUpperCase() : fixPlayerSecondName.toUpperCase();
  }

  render() {
    return (
      <div className="container-game" ref="container">

        <div className="game-info">
          <div className="game-info-players-block">
            <div className="game-info-players-symbol" ref="gameInfoSymbolX">
              <div className="game-info-players-walks">Ход</div>
              X
            </div>
            <div className="game-info-players-name">{this.state.gameData.playerFirstName}</div>
            <div className="game-info-score" ref="gameInfoScoreX">{this.state.gameData.victoryFirstPlayer}</div>
          </div>

          <div className="game-info-score">-</div>

          <div className="game-info-players-block">
            <div className="game-info-score" ref="gameInfoScoreO">{this.state.gameData.victorySecondPlayer}</div>
            <div className="game-info-players-name" ref="gameInfoWalksO">
              {(this.state.gameData.gameType === 'player') ? this.state.gameData.playerSecondName : 'Компьютер'}
            </div>
            <div className="game-info-players-symbol" ref="gameInfoSymbolO">
              O
              <div className="game-info-players-walks">Ход</div>
            </div>
          </div>
        </div>

        <div className="game-space" ref="gameSpace" onClick={eventClickCells.bind(this)}>
          {this.state.gameData.spaceData.map((row, indexRow) => {
            return <div key={`row${indexRow}`} className="game-space-row">{row.map((cell, indexCell) => {
              return <div key={`row${indexRow}cell${indexCell}`} value={indexRow + '-' + indexCell}
                          className={(cell === 0) ?
                            "game-space-cell game-space-cell-hover" :
                            "game-space-cell game-space-cell-active"}
              >
                {
                  (this.state.gameData.modalWindowIsOpen === false) ?
                    (cell !== 0) ?
                      (cell === 1) ? 'X' : 'O'
                      : <br/>
                    : <br/>
                }
              </div>
            })}
            </div>
          })}
        </div>

        <div className="game-panel">
          <div className="game-panel-hint">Игра до {this.state.gameData.howManyWins} побед</div>
          <button className="game-panel-btn" onClick={eventNewGame.bind(this)}>Новая игра</button>
          <div className="game-panel-hint">
            Игровое поле {this.state.gameData.spaceSize}x{this.state.gameData.spaceSize}
          </div>
        </div>

        <ModalWindow
          isOpen={this.state.gameData.modalWindowIsOpen}
          contentLabel="Game Victory Modal Window"
          className={{base: 'game-modal-window', afterOpen: '', beforeClose: ''}}
          overlayClassName={{base: 'game-modal-window-overlay', afterOpen: '', beforeClose: ''}}
        >
          <div className="modal-window-victory-title">Победил!</div>
          <div className="modal-window-victory-player">{this.modalWindowPlayerVictory()}</div>
          <button className="modal-window-btn" onClick={eventNewGame.bind(this)}>Новая игра</button>
        </ModalWindow>
      </div>
    )
  }
}

export default connect(
  state => ({
    getGameData: state.gameData
  }),
  dispatch => ({
    dispatch
  })
)(game);