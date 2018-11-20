import React, { Component } from 'react';
import './HeaderButton.css';
import AddButton from '../Buttons/AddButton';
import SettingsButton from '../Buttons/SettingsButton';

class HeaderButton extends Component {
  render() {
    return (
      <div className="headerButton">
        {this.props.type === 'settings' &&
        <SettingsButton />}
        {this.props.type === 'add' &&
        <AddButton />}
      </div>
    );
  }
}

export default HeaderButton;
