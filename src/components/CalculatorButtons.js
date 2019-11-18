import React from 'react'

const CalculatorButtons = props => {
    return (
        <div>
            <div>
                <button onClick={props.handleChange} value={7} >7</button>
                <button onClick={props.handleChange} value={8}>8</button>
                <button onClick={props.handleChange} value={9}>9</button>
            </div>
            <div>
                <button onClick={props.handleChange} value={4}>4</button>
                <button onClick={props.handleChange} value={5}>5</button>
                <button onClick={props.handleChange} value={6}>6</button>
            </div>
            <div>
                <button onClick={props.handleChange} value={1}>1</button>
                <button onClick={props.handleChange} value={2}>2</button>
                <button onClick={props.handleChange} value={3}>3</button>
            </div>
            <button onClick={props.handleChange} value={0}>0</button>
            <div>
                <button onClick={props.handleChange} value={'-'}>-</button>
                <button onClick={props.handleChange} value={'+'}>+</button>
                <button onClick={props.handleChange} value={'*'}>*</button>
                <button onClick={props.handleChange} value={':'}>:</button>
            </div>
            <button onClick={props.solve}>=</button>
        </div>
    )
}

export default CalculatorButtons
