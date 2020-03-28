import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterInput from "./components/CounterInput";
import { render } from "@testing-library/react";

function App() {
  // State of the size of Chessboard
  let [size, setSize] = useState(8);
  let row = [];
  let grid = [];

  // incrementAttribute and decrementAttribute could be applied to other states, just apply conditional for different states

  const incrementAttribute = e => {
    if (e.target.value == "size" && size < 20) {
      setSize(++size);
    }
  };

  const decrementAttribute = e => {
    if (e.target.value == "size" && size > 8) {
      setSize(--size);
    }
  };

  // Calls renderRow for n size
  const renderGrid = size => {
    for (let i = 0; i < size; i++) {
      grid.push(<div className="each-row flex-row">{renderRow(size)}</div>);
    }
    return grid;
  };

  const renderRow = size => {
    for (let j = 0; j < size; j++) {
      row.push(<div className="each-square"></div>);
      break;
    }
    return row;
  };

  return (
    <div className="App">
      <div className="app-container">
        <h2>React Chessboard</h2>
        <label>Size</label>
        <div className="flex-row size-button-container">
          <button
            value="size"
            onClick={e => {
              incrementAttribute(e);
            }}
          >
            +
          </button>
          <h3>{size}</h3>
          <button
            value="size"
            onClick={e => {
              decrementAttribute(e);
            }}
          >
            -
          </button>
        </div>
        <div className="chessboard-container flex-column">
          {renderGrid(size)}
        </div>
      </div>
    </div>
  );
}

export default App;
