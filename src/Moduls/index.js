import React from 'react';

import ElementSettings from './elementSettings';
import './style/index.css';

export default class extends React.Component {
  componentDidMount() {
    this.containerSize();

    window.addEventListener('resize', () => {
      this.containerSize()
    });
  }

  /**
   * Подстраивает высоту всего приложения под экран
   */
  containerSize() {
    this.refs.containerMain.style.height = window.innerHeight + 'px';
  }

  render() {
    return (
      <div className="container-main" ref="containerMain">
        <ElementSettings/>
        <div className="container-main-title">КРЕСТИКИ НОЛИКИ</div>
        {this.props.children}
      </div>
    )
  }
}