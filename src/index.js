import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Clock from './components/clock/Clock';
import Toggle from './components/toggle/Toggle';
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />,document.getElementById('clock'));
ReactDOM.render(<Toggle />,  document.getElementById('btn'));

registerServiceWorker();
