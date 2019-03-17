import React, { Component } from 'react';
import './App.css';

//Import components here
import Header from '../src/components/Header';
import TeslaBattery from '../src/containers/TeslaBattery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery />
      </div>
    );
  }
}

export default App;
