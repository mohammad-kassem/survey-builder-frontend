import { useState } from "react";


function CheckBox({question, answer, options}){
    const [input, setInput] = useState(new Array(options.length).fill(false));
    function handleCheckBox(index){
        const temp = input.map(function(v, i){
            return (i !== index ? v : !v);
        });
        setInput(temp);
    }
    console.log(options.filter((v, i)=>input[i]));
    return(
    <>
        <label id={"question" + question.id}>{question.text}</label>
        <div className="radio-container">
        {options.map((option, index) =>(
        <>  
            <input type="checkbox" checked = {input[index]} value={option.option} onChange={()=>handleCheckBox(index)}></input>
            <label>{option.option}</label>
            <br/>
        </>
        ))
        }
        </div>
    </>
    // console.log(input);

    
    )
}

export default CheckBox;