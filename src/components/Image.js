import { useState } from "react";


function Image({question, answer}){
    const [input, setInput] = useState("");
    console.log(input);
    return(
    <div className="input-container">
        <label>{question.text}</label>
        <input type="file" accept="image/*" id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);
        }}></input>
    </div>
    )
}

export default Image;