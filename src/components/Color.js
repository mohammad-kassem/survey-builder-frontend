import { useState } from "react";


function Color({question, answer}){
    const [input, setInput] = useState("");
    return(
    <div className="input-container">
        <label>{question.Color}</label>
        <input type="color" id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);
        }}></input>
    </div>
    )
}

export default Color;