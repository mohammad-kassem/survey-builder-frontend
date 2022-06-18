import { useState } from "react";


function RadioButton({question, answer, options}){
    const [input, setInput] = useState("");
    console.log(input);
    return(
    <>
        <label id={"question" + question.id}>{question.text}</label>
        <div className="radio-container">
        {options.map(option =>(
        <div key={option.id}>
            <input type="radio" checked = {input === option.option} value={option.option} onChange={function(e){
                setInput(e.target.value);
            }}></input>
            <label>{option.option}</label>
            <br/>
        </div>
        ))
        }
        </div>
    </>

    
    )
}

export default RadioButton;