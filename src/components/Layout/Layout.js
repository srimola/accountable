import React, { Component } from 'react';
import './Layout.css';
import Header from '../Header';
import CalendarView from '../CalendarView';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <CalendarView />
      </div>
    );
  }
}

export default Layout;
