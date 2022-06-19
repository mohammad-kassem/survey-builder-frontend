import { useState } from "react";


function Textarea({question, answers, addAnswer}){
    const [input, setInput] = useState("");
    return(
    <>
        <label>{question.text}</label>
        <textarea id={"question" + question.id} value={input} required onChange={function(e){
            setInput(e.target.value);let obj = {}; obj[e.target.id.replace( /^\D+/g, '')] = e.target.value; addAnswer(obj)
        }}></textarea>
    </>
    )
}

export default Textarea;