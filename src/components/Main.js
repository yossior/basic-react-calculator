import React, { useState } from "react";
import CalculatorField from "./CalculatorField";
import CalculatorButtons from './CalculatorButtons';

const Main = () => {
    const [equation, setEqueation] = useState("");
    const handleChange = e => {
        console.log(e.target.value, equation.slice(-1));
        if (isNaN(equation.slice(-1)) && isNaN(e.target.value))
            setEqueation(equation.substring(0, equation.length - 1) + e.target.value);
        else {
            setEqueation(equation + e.target.value);
        }
    }

    const solve = () => {
        alert(eval(equation
        ))
        setEqueation('')
    }
    return (
        <div>
            <CalculatorButtons handleChange={handleChange} solve={solve} />
            <CalculatorField input={equation} />
        </div>
    )
}

export default Main;