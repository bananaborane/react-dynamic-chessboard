import React from 'react'

function PlayerOneForm(props) {
    return (
        <form className='player-one-form'>
          <h3>Player One Pieces:</h3>
          <label>Circle</label>
          <input type="radio" id="shape" name="shape" value='circle' onChange={(e)=>{props.setPlayerOnePieces({[e.target.name]: e.target.value})}}></input>
          <label>Square</label>
          <input type="radio" id="shape" name="shape" value='square' onChange={(e)=>{props.setPlayerOnePieces({[e.target.name]: e.target.value})}} ></input>
          <label>Red</label>
          <input type="radio" id="color" name="color" value='red' onChange={(e)=>{props.setPlayerOnePieces({[e.target.name]: e.target.value})}}></input>
          <label>Black</label>
          <input type="radio" id="color" name="color" value='black' onChange={(e)=>{props.setPlayerOnePieces({[e.target.name]: e.target.value})}} ></input>
        </form>
    )
}

export default PlayerOneForm
