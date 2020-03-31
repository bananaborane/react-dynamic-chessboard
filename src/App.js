import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterInput from "./components/CounterInput";
import { render } from "@testing-library/react";
import PlayerOneForm from "./components/PlayerOneForm";
import PlayerTwoForm from "./components/PlayerTwoForm";
import PlayerOneChessPiece from "./components/PlayerOneChessPiece";
import PlayerTwoChessPiece from "./components/PlayerTwoChessPiece";

function App() {
  // State of the size of Chessboard
  let [size, setSize] = useState(8);
  let [chessGrid, setChessGrid] = useState([])
  let [clickedPiece, setClickedPiece] = useState({
    pieceRow: null,
    pieceColumn: null
  });
  let [suggestedMoveOne, setSuggestedMoveOne] = useState({})
  let [suggestedMoveTwo, setSuggestedMoveTwo] = useState({})
  let [pieces, setPieces] = useState([]);
  let [playersTurn, setPlayersTurn] = useState('playerOne')
  let [playerOnePieces, setPlayerOnePieces] = useState({
    shape: "circle",
    color: "red"
  });
  let [playerTwoPieces, setPlayerTwoPieces] = useState({
    shape: "circle",
    color: "black"
  });
  let grid = [];
  let row = [];
  let piecesGrid = []

  let initChessGrid = (size) => {
    for (let i = 0 ; i < size ; i++){
      let emptyArr = []
      piecesGrid.push(emptyArr)
      for (let j = 0 ; j < size ; j++){
        let currentLocation = {
          row: i,
          column: j
        }
        if (i < 2){
          emptyArr.push(<PlayerOneChessPiece className={ "each-piece player-one-piece" + " " + (playerOnePieces.shape === "circle" ? "circle-piece" : "square-piece") + " " + (playerOnePieces.color === "red" ? " red-piece" : " black-piece") } selectPiece={selectPiece} clickedPiece={clickedPiece} setClickedPiece={setClickedPiece} pieceRow={i} pieceColumn={j} />)
          continue;
        }
        
        if (i + 3 > size){
          emptyArr.push(<PlayerTwoChessPiece className={ "each-piece player-two-piece" + " " + (playerTwoPieces.shape === "circle" ? "circle-piece" : "square-piece") + " " + (playerTwoPieces.color === "black" ? " black-piece" : "red-piece") } selectPiece={selectPiece} clickedPiece={clickedPiece} setClickedPiece={setClickedPiece} pieceRow={i} pieceColumn={j} />)
        }
        else {
          emptyArr.push(<p className={"each-square centered empty-space" + ' ' + suggestedMovesStylingCheck(i, j)} onClick={e => {movePiece(e, currentLocation)}}></p>)
        }
      }
    }
    console.log(piecesGrid)
    let mappedArr = piecesGrid.map((val, i, ar) => {
      return (<div key={i} className="each-row flex-row">
        {val}
      </div>)
    })
    console.log(piecesGrid)
    return mappedArr
  }


  // incrementAttribute and decrementAttribute could be applied to other states, just apply conditional for different states

  const incrementAttribute = e => {
    if (e.target.value === "size" && size < 20) {
      setSuggestedMoveOne({})
      setSuggestedMoveTwo({})
      setClickedPiece({
        pieceRow: null,
        pieceColumn: null
      })
      setSize(++size);
    }
  };
  
  const decrementAttribute = e => {
    if (e.target.value === "size" && size > 8) {
      setSuggestedMoveOne({})
      setSuggestedMoveTwo({})
      setClickedPiece({
        pieceRow: null,
        pieceColumn: null
      })
      setSize(--size);
    }
  };

  
  const suggestedMovesStylingCheck = (row, column) => {
    console.log(`from line 109`)
    if (suggestedMoveOne.row === row && suggestedMoveOne.column === column){
      return 'suggested-move'
    }
    if (suggestedMoveTwo.row === row && suggestedMoveTwo.column === column){
      return 'suggested-move'
    }
    return '';
  }
  
  const movePiece = (e, location) => {
    e.preventDefault()
    const { row, column } = location
    const { pieceRow, pieceColumn } = clickedPiece;
    if (!e.target.className.split(' ').includes('suggested-move')) return;
    // console.log(`line 111, clicked`, e.target)
    // if (grid[row].props.children[column].props.children) return;
    // console.log(`line 113`, clickedPiece, location)
    // console.log(piecesGrid[row][column])
    let emptySpace = { ...(piecesGrid[row][column]) };
    let piece = { ...(piecesGrid[pieceRow][pieceColumn]) };
    piecesGrid[row][column] = piece;
    piecesGrid[pieceRow][pieceColumn] = emptySpace;
    console.log(piecesGrid)
    
  
  }

  // Calls renderRow for n size
  const renderGrid = size => {
    for (let i = 0; i < size; i++) {
        grid.push(
          <div className="each-row flex-row">{renderRow(size, i)}</div>
          );
    }
    console.log(grid)
    return grid;
  };

  
  const renderRow = (size, iter) => {
    let newRow = [];
    for (let j = 0; j < size; j++) {
      let currentLocation = {
        row: iter,
        column: j
      }
      newRow.push(<div className={"each-square centered flex-row"} currentLocation={currentLocation} row={iter} column={j} ></div>);
    }
    return newRow;
  };


  
  const renderRowPlayerOnePieces = (size, iter) => {
    let newRow = [];
    for (let j = 0; j < size; j++) {
      let currentLocation = {
        row: iter,
        column: j
      }
      newRow.push(
        <div className={"each-square centered flex-row"} currentLocation={currentLocation} row={iter} column={j}>
          
        </div>
      );
      
    }
    return newRow;
  };
  
  const renderRowPlayerTwoPieces = (size, iter) => {
    let newRow = [];
    for (let j = 0; j < size; j++) {
      let currentLocation = {
        row: iter,
        column: j
      }
      newRow.push(
        <div className={"each-square centered flex-row"} currentLocation={currentLocation} row={iter} column={j}>
          
        </div>
      );
      
    }
    return newRow;
  };

  
  const selectPiece = (e, pieceInfo) => {
    e.preventDefault()
    const { pieceRow, pieceColumn } = pieceInfo;
    setClickedPiece({ pieceRow, pieceColumn })
    suggestMovesOnSelect(pieceInfo)
  }

  const suggestMovesOnSelect = (pieceInfo) => {
    const { pieceRow, pieceColumn, piecePlayer } = pieceInfo;
    let suggestedMovesFromPiece;
    if (piecePlayer === 'playerOne'){
      suggestedMovesFromPiece = [{ 
        row: pieceRow + 1, 
        column: pieceColumn - 2
      }, { 
        row: pieceRow + 1, 
        column: pieceColumn + 2
      }]
    }
    else {
      suggestedMovesFromPiece = [{ 
        row: pieceRow - 1, 
        column: pieceColumn - 2
      }, { 
        row: pieceRow - 1, 
        column: pieceColumn + 2
      }]
    }
    setSuggestedMoveOne(suggestedMovesFromPiece[0])
    setSuggestedMoveTwo(suggestedMovesFromPiece[1])
  }
  

  return (
    <div className="App flex-row">
      <div className="app-container flex-column">
        <h2>React Chess</h2>
        <PlayerOneForm setPlayerOnePieces={setPlayerOnePieces} />
        <PlayerTwoForm setPlayerTwoPieces={setPlayerTwoPieces} />
        <CounterInput size={size} incrementAttribute={incrementAttribute} decrementAttribute={decrementAttribute} />
      </div>
      <div className="chessboard-container">
        <div className='chessboard abso flex-column'>
          {renderGrid(size)}
        </div>
        <div className='chessboard-pieces abso flex-column'>
          {initChessGrid(size)}
        </div>
      </div>
    </div>
  );
}

export default App;
