import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import getReactContact from '../components/contacts/Contact';

const user = {
  firstName: 'Leonardo',
  lastName: 'Aranibar'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


class App extends Component {
  render() {
    function welcomeMsg(){
      return "Welcome to React=> ";
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{welcomeMsg()} {formatName(user)}</h1>
        </header> 
        <p className="App-intro">
         Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
getReactContact();
export default App;
