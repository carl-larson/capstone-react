import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-router-dom'

import './index.css';
import './App.css';

// import Navigation from './components/Navigation'
import ReactRouter from './router/ReactRouter'
import * as serviceWorker from './serviceWorker';
// const express = require ('express')
// const playersRouter = require('./routers/players');
// const authRouter = require('./routers/auth');
// const bodyParser = require('body-parser');
require ('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className='navBar'>
        <h1>Farkle!</h1>
        <div className='buttons'>
          <Link activeClassName="active" to="/">Home</Link>
          <Link activeClassName="active" to="/login">Login</Link>
          <Link activeClassName="active" to="/farkle">Play</Link>
        </div>
      </div>
      <ReactRouter />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
// serviceWorker.unregister();
