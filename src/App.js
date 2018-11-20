import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CalendarView from './components/CalendarView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CalendarView />
      </div>
    );
  }
}

export default App;
