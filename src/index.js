import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app/App';
import ClockTime from './components/Clock';
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ClockTime();
setInterval(ClockTime, 1000);



registerServiceWorker();
