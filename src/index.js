import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

fetch('http://localhost:5000/games')
   .then(res => res.json())
   .then((games) => {
      ReactDOM.render(<App data={games} />, document.getElementById('root'));
      registerServiceWorker();
   });
