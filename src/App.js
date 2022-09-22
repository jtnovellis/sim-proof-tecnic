import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className='App'>
      <h1>Counter</h1>
      {counter < 0 ? (
        <p>Counter is below zero</p>
      ) : counter > 10 ? (
        <p>Counter is above ten</p>
      ) : null}
      <h2>{counter}</h2>
      <Button trigger={setCounter}>Increment</Button>
      <Button trigger={setCounter}>Decrement</Button>
    </div>
  );
}

export default App;
