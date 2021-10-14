import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

import './Counter.css';

export default function Counter() {
  const [inputValue, setInputValue] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <div className="counter-count">COUNT: {count}</div>
      <div className="counter-buttons">
        <button
          className="counter-button"
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="counter-button"
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <form className="counter-form">
        <div>Enter a value:</div>
        <input
          className="counter-input"
          value={inputValue}
          type="number"
          onChange={(ev) => {
            setInputValue(ev.target.value);
          }}
        />
        <button
          className="counter-button"
          type="submit"
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(inputValue))}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
