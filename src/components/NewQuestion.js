import { useState, useEffect } from "react";


function NewQuestion({question, setQuestion}){
    const [text, setText] = useState("");
    const [type, setType] = useState("");
    const [options, setOptions] = useState([]);
    const [optionsCount, setOptionsCount] = useState(1);
    const [addOptions, setAddOptions] = useState(false);
    // const [question, setQuestion] = useState({});
    console.log(question);
    let options_submitted = [];


    useEffect(() => {
        setOptions(new Array(optionsCount).fill(""));
        console.log("hello");
      }, [optionsCount]);

    function submitQuestion(text, type, options){
        for (let i=0; i < options.length; i++){
            let obj = {option : options[i]};
            options_submitted.push(obj);
        }
        console.log(options_submitted)
        // submitQuestion("options", options_submitted);
        setQuestion({text:text, type:type, options:options_submitted});
    }

    function handleText(index, e){
        const temp = options.map(function(v, i){
            return (i !== index ? v : e.target.value);
        });
        setOptions(temp);
    }

    let q_options=["color", "date", "dropdown", "image", "number", "radiobutton", "range", "text", "textarea", "time"];
    return(
    <form onSubmit={(e) => {e.preventDefault(); submitQuestion(text, type, options)}}>
        <div className="flex-container">
        <input type="text" id="question-text" value={text} placeholder="text" required onChange={function(e){setText(e.target.value)}}></input>
        <select id={"new-question"} required onChange={function(e){setType(e.target.value);}}>
        <option value="">Please select</option>
        {q_options.map((q_option, i)=>(
            <option key={i} value={q_option}>{q_option}</option>
        ))
        }
        
        </select>
        </div>
        {["radiobutton", "dropdown"].includes(type) && <>
        <input type="number" value={optionsCount} onChange={function(e) {setOptionsCount(Number(e.target.value))}}></input>
            
            {options.map((option, index) =>(
                <input key={index} type="text" value={option} required onChange={(e)=>handleText(index, e)}>
                </input>))}
            </>}
                {/* <input type="number" value={optionsCount} onChange={function(e) {setOptionsCount(e.target.value)}}></input>
                <button onClick={()=>{setAddOptions(!addOptions)}}> save options</button> */}
            {/* </div>}
            {addOptions &&  */}
        <div className="btn-container"><div></div><button type="submit" className="btn">Save Question</button></div>
    </form>
    )
}

export default NewQuestion;