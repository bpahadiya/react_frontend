import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sign_in from './Sign_in';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Sign_in />, document.getElementById('Login'));

registerServiceWorker();
