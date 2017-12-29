import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app/App';
import Clock from './components/clock/Clock';
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
  );


registerServiceWorker();
