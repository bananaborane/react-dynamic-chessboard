import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterInput from "./components/CounterInput";
import { render } from "@testing-library/react";

function App() {
  // State of the size of Chessboard
  let [size, setSize] = useState(8);
  let [playerOnePieces, setPlayerOnePieces] = useState({ 
    shape: 'circle',
    color: 'red'
  });
  let [playerTwoPieces, setPlayerTwoPieces] = useState({ 
    shape: 'circle',
    color: 'black'
  });
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
      if (i < 2){
        grid.push(<div className="each-row flex-column">{renderRowPlayerOnePieces(size)}</div>);
        continue;
      }
      if (i + 3 > size){
        grid.push(<div className="each-row flex-column">{renderRowPlayerTwoPieces(size)}</div>);
        continue;
      }
      else {
        grid.push(<div className="each-row flex-column">{renderRow(size)}</div>);
      }
    }
    // console.log(grid)
    return grid;
  };

  const renderRow = size => {
    for (let j = 0; j < size; j++) {
      row.push(<div className="each-square flex-row"></div>);
      break;
    }
    return row;
  };
  
  const renderRowPlayerOnePieces = size => {
    for (let j = 0; j < size; j++) {
      row.push(<div className="each-square centered flex-row"><div className={'each-piece player-one-piece ' + (playerOnePieces.shape == 'circle' ? 'circle-piece' : 'square-piece')+' '+(playerOnePieces.color == 'red' ? ' red-piece' : ' black-piece')}></div></div>);
      break;
    }
    return row;
  }

  const renderRowPlayerTwoPieces = size => {
    for (let j = 0; j < size; j++) {
      row.push(<div className="each-square centered flex-row"><div className={'each-piece player-two-piece ' + (playerTwoPieces.shape == 'circle' ? 'circle-piece' : 'square-piece')+' '+(playerTwoPieces.color == 'red' ? ' red-piece' : 'black-piece')}></div></div>);
      break;
    }
    return row;
  }


  return (
    <div className="App">
      <div className="app-container">
        <h2>React Chess</h2>
        <form className='player-one-form'>
          <h3>Player One Pieces:</h3>
          <label>Circle</label>
          <input type="radio" id="shape" name="shape" value='circle' onChange={(e)=>{setPlayerOnePieces({[e.target.name]: e.target.value})}}></input>
          <label>Square</label>
          <input type="radio" id="shape" name="shape" value='square' onChange={(e)=>{setPlayerOnePieces({[e.target.name]: e.target.value})}} ></input>
          <label>Red</label>
          <input type="radio" id="color" name="color" value='red' onChange={(e)=>{setPlayerOnePieces({[e.target.name]: e.target.value})}}></input>
          <label>Black</label>
          <input type="radio" id="color" name="color" value='black' onChange={(e)=>{setPlayerOnePieces({[e.target.name]: e.target.value})}} ></input>
        </form>
        <form className='player-two-form'>
          <h3>Player Two Pieces:</h3>
          <label>Circle</label>
          <input type="radio" id="shape" name="shape" value='circle' onChange={(e)=>{setPlayerTwoPieces({[e.target.name]: e.target.value})}}></input>
          <label>Square</label>
          <input type="radio" id="shape" name="shape" value='square' onChange={(e)=>{setPlayerTwoPieces({[e.target.name]: e.target.value})}} ></input>
          <label>Red</label>
          <input type="radio" id="color" name="color" value='red' onChange={(e)=>{setPlayerTwoPieces({[e.target.name]: e.target.value})}}></input>
          <label>Black</label>
          <input type="radio" id="color" name="color" value='black' onChange={(e)=>{setPlayerTwoPieces({[e.target.name]: e.target.value})}} ></input>
        </form>
        <label>Color</label>
        <label>Size</label>
        <div className="flex-row options-container">
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
        <div className="chessboard-container flex-row">
          {renderGrid(size)}
        </div>
      </div>
    </div>
  );
}

export default App;
