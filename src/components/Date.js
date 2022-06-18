import { useState } from "react";


function Date({question, answer}){
    const [input, setInput] = useState("");
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <input type="date" id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);
        }}></input>
    </div>
    )
}

export default Date;