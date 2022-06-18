import { useState } from "react";


function Textarea({question, answer}){
    const [input, setInput] = useState("");
    return(
    <>
        <label>{question.text}</label>
        <textarea id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);
        }}></textarea>
    </>
    )
}

export default Textarea;