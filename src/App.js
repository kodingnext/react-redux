import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Score from './components/Score';

function App() {
  const counter = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>counter</h2>
        <div style={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
          {counter}
          <button onClick={() => dispatch({ type: 'INCREMENT' })} >+</button>
        </div>

        <h2>Score</h2>
        <Score counter={counter} />
      </header>
    </div>
  );
}

export default App;
