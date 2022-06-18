import { useState } from "react";


function Dropdown({question, answer, options}){
    const [input, setInput] = useState("");
    console.log(input);
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <select id={"question" + question.id} onChange={function(e){
                setInput(e.target.value);}}>
        {options.map(option=>(
            <option value={option.option} 
            >{option.option}</option>
        ))
        }
        </select>
    </div>

    
    )
}

export default Dropdown;