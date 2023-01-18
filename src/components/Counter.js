import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customNumber,
  decrement,
  increment,
} from "../redux/state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const [newNumber, setNewNumber] = useState("");
  const dispatch = useDispatch();
  const [err, setError] = useState("");
  const myNumber = useRef();

  const handleNumber = () => {
    setError("");
    if (!newNumber) {
      return setError("Field must not be empty");
    }

    if (Number(newNumber.length) > 6) {
      return setError("Number can not be more than 6 digit");
    }

    // console.log(typeof Number(newNumber));
    dispatch(customNumber(Number(newNumber)));
  };
  return (
    <div className="card text-center">
      <div className="card-header bg-secondary text-white">
        <h2>My Counter App</h2>
      </div>
      <div className="card-body">
        <h2>{count}</h2>
        <div className="my-4">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn btn-success mx-2"
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            disabled={count === 0}
            className="btn btn-danger mx-2"
          >
            Decrement
          </button>
        </div>
        <div className="my-4">
          <div className="row justify-content-center">
            <input
              value={Number(newNumber)}
              onChange={(e) => setNewNumber(e.target.value)}
              ref={myNumber}
              type="number"
              className="form-control w-50 mb-2"
            />

            {err && (
              <p
                style={{
                  color: "red",
                }}
              >
                {err}
              </p>
            )}
          </div>
          <button
            onClick={() => handleNumber()}
            className="my-3 btn btn-danger"
          >
            Custom Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
