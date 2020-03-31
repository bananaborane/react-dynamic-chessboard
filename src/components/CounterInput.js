import React from 'react'

function CounterInput(props) {

    return (
        <div>
            <label>Size</label>
        <div className="flex-row options-container">
          <button
            value="size"
            onClick={e => {
              props.incrementAttribute(e);
            }}
          >
            +
          </button>
          <h3>{props.size}</h3>
          <button
            value="size"
            onClick={e => {
              props.decrementAttribute(e);
            }}
          >
            -
          </button>
        </div>
        </div>
    )
}

export default CounterInput
