import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Navigation from './components/Navigation'
import ReactRouter from './router/ReactRouter'


function App() {
  return (
    <BrowserRouter className="App">
      <Navigation />
      <ReactRouter />
    </BrowserRouter>
  );
}

export default App;
