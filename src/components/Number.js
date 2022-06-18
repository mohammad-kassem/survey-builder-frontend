import { useState } from "react";


function Number({question, answer}){
    const [input, setInput] = useState("");
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <input type="number" id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);
        }}></input>
    </div>
    )
}

export default Number;