import { useState } from "react";


function Image({question, answers, addAnswer}){
    const [input, setInput] = useState("");
    console.log(input);
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <input type="file" accept="image/*" id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);let obj = {}; obj[e.target.id.replace( /^\D+/g, '')] = e.target.value; addAnswer(obj)
        }}></input>
    </div>
    )
}

export default Image;