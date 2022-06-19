import { useState } from "react";


function RadioButton({question, options, answers, addAnswer}){
    const [input, setInput] = useState("");
    console.log(input);
    return(
    <>
        <label>{question.text}</label>
        <div className="radio-container"  id={"question" + question.id}>
        {options.map(option =>(
        <div key={option.id}>
            <input type="radio" checked = {input === option.option} value={option.option} onChange={function(e){ e.stopPropagation();
            setInput(e.target.value); let obj = {}; obj[e.target.parentNode.parentNode.id.replace( /^\D+/g, '')] = e.target.value; addAnswer(obj)
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