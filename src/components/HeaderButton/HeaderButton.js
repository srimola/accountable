import React, { Component } from 'react';
import './HeaderButton.css';
import AddButton from '../Buttons/AddButton';
import SettingsButton from '../Buttons/SettingsButton';

class HeaderButton extends Component {
  render() {
    return (
      <a className="headerButton" href={this.props.type}>
        {this.props.type === 'settings' ?
        <SettingsButton /> :
        <AddButton />}
      </a>
    );
  }
}

export default HeaderButton;
