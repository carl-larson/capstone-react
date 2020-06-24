import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import ReactRouter from './router/ReactRouter'

function App() {
  return (
    <div className="App">
      <Navigation />
      <ReactRouter />
    </div>
  );
}

export default App;
