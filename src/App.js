import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Arnold from './Arnold';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {Arnold.responses.map(sound => {
              return (
              <div key={sound.name}>
              <audio controls>
                <source src='./sounds/responses/cop.wav' type="audio/wav"></source>
              </audio>
              <p>{sound.caption}</p>
              </div>
              )
            })}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
