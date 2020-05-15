import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const express = require ('express')
// const playersRouter = require('./routers/players');
// const authRouter = require('./routers/auth');
// const bodyParser = require('body-parser');
require ('dotenv').config();

// const app = express();
// const port = process.env.PORT || 4001;

// app.use('/players', playersRouter);

// app.get('/', (req, res) => {
//     res.send('Welcome to my Capstone server!')
//     })

//     app.listen(port, () => {
//     console.log(`Web server is listening on port ${port}!`);
//     });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
// serviceWorker.unregister();
