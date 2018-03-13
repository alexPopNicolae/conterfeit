import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftSideBar from './features/LeftSideBar';
import MainContent from './features/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <LeftSideBar/>
      <MainContent />
      </div>
    );
  }
}

export default App;
