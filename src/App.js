import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Arnold from './Arnold';
import ReactAudioPlayer from 'react-audio-player';

class App extends Component {

  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {Arnold.responses.map(sound => {
              return (
              <div key={sound.name}>
                  <audio id="damn" src="./sounds/responses/choir_boy.mp3" preload="auto"></audio>
                    <button onclick='document.getElementById("damn").play()'>{sound.caption}</button>
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
