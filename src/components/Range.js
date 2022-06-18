import { useState } from "react";


function Range({question, answer}){
    const [input, setInput] = useState("");
    console.log(input);
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <input type="Range" id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);
        }}></input>
    </div>
    )
}

export default Range;