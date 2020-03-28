import React from 'react'

function CounterInput(props) {

    const incrementAttribute = (attrib) =>{
        if (attrib < 21) attrib++;
    }

    const decerementAttribute = (attrib) =>{
        if (attrib > 4) attrib--;
    }

    return (
        <div>
            <button onClick={()=>{incrementAttribute(props.attribute)}}>+</button>
            {props.attribute}
            <button onClick={()=>{decerementAttribute(props.attribute)}}>-</button>
        </div>
    )
}

export default CounterInput
