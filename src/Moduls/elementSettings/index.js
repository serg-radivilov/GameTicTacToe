import React from 'react';

import initialSettingsSoundMusic from './initialSettingsSoundMusic';
import eventClickIco from './event/eventClickIco';
import eventChangeRange from './event/eventChangeRange';
import icoSoundOn from './style/src/sound-on.png';
import icoSoundOff from './style/src/sound-off.png';
import icoMusicOn from './style/src/music-on.png';
import icoMusicOff from './style/src/music-off.png';
import './style/index.css';

const initialSettings = {
  soundState: true,
  soundVolume: 100,
  musicState: true,
  musicVolume: 100,
};

export default class extends React.Component {
  constructor(state, props) {
    super(state, props);

    // Думаю тут ясно зачем нужна локальная история
    this.state = {
      gameSettings: JSON.parse(localStorage.getItem('gameSettings')) || initialSettings
    }
  }

  componentDidMount() {
    this.refs.settingsSoundRange.value = (this.state.gameSettings.soundState) ? this.state.gameSettings.soundVolume : 0;
    this.refs.settingsMusicRange.value = (this.state.gameSettings.musicState) ? this.state.gameSettings.musicVolume : 0;

    initialSettingsSoundMusic(this.state.gameSettings);
  }

  render() {
    return (
      <div className="settings-block">

        <div className="settings-title">Настройки</div>

        <hr className="settings-hr"/>

        <div className="settings-items">
          <img className="settings-img"
               src={
                 (this.state.gameSettings.soundVolume > 0) ?
                   (this.state.gameSettings.soundState) ? icoSoundOn : icoSoundOff
                   : icoSoundOff
               }
               alt={(this.state.gameSettings.soundState) ? 'ON' : 'OFF'}
               onClick={() => eventClickIco(this, 'sound')}
          />
          <input className="settings-range" ref="settingsSoundRange" type="range" max='100' min='0'
                 onChange={(event) => eventChangeRange(this, event, 'sound')}
          />
        </div>

        <hr className="settings-hr"/>

        <div className="settings-items">
          <img className="settings-img"
               src={
                 (this.state.gameSettings.musicVolume > 0) ?
                   (this.state.gameSettings.musicState) ? icoMusicOn : icoMusicOff
                   : icoMusicOff
               }
               alt={(this.state.gameSettings.musicState) ? 'ON' : 'OFF'}
               onClick={() => eventClickIco(this, 'music')}
          />
          <input className="settings-range" ref="settingsMusicRange" type="range" max='100' min='0'
                 onChange={(event) => eventChangeRange(this, event, 'music')}
          />
        </div>

      </div>
    )
  }
}