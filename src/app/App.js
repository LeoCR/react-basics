import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Leonardo',
  lastName: 'Aranibar'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React=> , {formatName(user)}</h1>
        </header>
        <p className="App-intro">
          To get started <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
