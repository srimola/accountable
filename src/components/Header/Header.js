import React, { Component } from 'react';
import HeaderButton from '../HeaderButton';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="">
        <header className="header">
          <HeaderButton type="settings"/>
          <HeaderButton type="add" />
        </header>
      </div>
    );
  }
}

export default Header;
