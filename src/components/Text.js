import { useState } from "react";


function Text({question, answer}){
    const [input, setInput] = useState("");
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <input type="text" id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);
        }}></input>
    </div>
    )
}

export default Text;