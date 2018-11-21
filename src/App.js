import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CalendarView from './components/CalendarView';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CalendarView />
        <TodoList />
      </div>
    );
  }
}

export default App;
