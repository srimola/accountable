import React, { Component } from 'react';
import './HeaderButton.css';
import Button from '../Button/Button';
import AddButton from '../Buttons/AddButton';
import SettingsButton from '../Buttons/SettingsButton';

class HeaderButton extends Component {
  render() {
    return (
      <Button className="headerButton" onClick={this.props.type}>
        {this.props.type === 'settings' ?
        <SettingsButton /> :
        <AddButton />}
      </Button>
    );
  }
}

export default HeaderButton;
