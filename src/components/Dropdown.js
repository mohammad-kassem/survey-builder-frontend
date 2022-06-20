import { useState } from "react";


function Dropdown({question, options, answers, addAnswer}){
    const [input, setInput] = useState("");
    console.log(input);
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <select id={"question" + question.id} onChange={function(e){
                setInput(e.target.value);let obj = {}; obj[e.target.id.replace( /^\D+/g, '')] = e.target.value; addAnswer(obj)}}>
        {options.map((option, i)=>(
            <option key={i} value={option.option} 
            >{option.option}</option>
        ))
        }
        </select>
    </div>

    
    )
}

export default Dropdown;