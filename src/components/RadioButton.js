import { useState } from "react";


function RadioButton({question, answer, options}){
    const [input, setInput] = useState("");
    return(
    <>
        <label id={"question" + question.id}>{question.text}</label>
        <div className="radio-container">
        {options.map(option =>(
        <>  
            <input type="radio" checked = {input === option.option} value={option.option} onChange={function(e){
                setInput(e.target.value);
            }}></input>
            <label>{option.option}</label>
            <br/>
        </>
        ))
        }
        </div>
    </>
    // console.log(input);

    
    )
}

export default RadioButton;