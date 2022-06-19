import { useState } from "react";


function Color({question, answers, addAnser}){
    const [input, setInput] = useState("");
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <input type="color" id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);let obj = {}; obj[e.target.id.replace( /^\D+/g, '')] = e.target.value; addAnser(obj)
        }}></input>
    </div>
    )
}

export default Color;