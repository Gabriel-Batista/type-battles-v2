import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Track></Track>
        <Paragraph></Paragraph>
        <GameInput></GameInput>
      </div>
    );
  }
}

export default App;
