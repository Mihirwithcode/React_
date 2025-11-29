import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>COUNT NUMBER</h1>
      <h2>Current Value:20</h2>
      <button onClick={add} style={{ color: 'blue' }}>
        Add Value:{count}
      </button>
      <br />
      <button onClick={remove} style={{ color: 'blue' }}>
        {' '}
        Remove Value:{count}
      </button>
      <p>Footer:{count}</p>
    </>
  );
}

export default App;
