import React, { useState } from 'react';

import {
  increment,
  decrement,
  resetbtn,
  incrementByAmount,
} from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const [amount, setamount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleclickincrement = () => {
    dispatch(increment());
  };

  const handleclickdecrement = () => {
    if (count <= 0) {
      count(count - 1);
    }
    dispatch(decrement());
  };

  const resetbtn1 = () => {
    dispatch(resetbtn());
  };

  const pay = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <button aria-label="Increment value" onClick={handleclickincrement}>
        +
      </button>
      <br />
      <br />
      <p> Count:{count}</p>

      <button aria-label="Decrement value" onClick={handleclickdecrement}>
        -
      </button>
      <br />
      <br />

      <button onClick={resetbtn1}>Reset</button>

      <input
        type="number"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />

      <button onClick={pay}>INcrement</button>
    </div>
  );
}

export default Counter;
