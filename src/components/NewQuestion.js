import { useState } from "react";
import OptionsForm from "./OptionsForm";


function NewQuestion(){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [type, setType] = useState("");
    const [optionsCount, setOptionsCount] = useState();
    const [addOptions, setAddOptions] = useState(false);
    console.log(title, desc, type, optionsCount, addOptions);


    let options=["color", "date", "dropdown", "image", "number", "radiobutton", "range", "text", "textarea", "time"];
    return(
    <>  
        <input type="text" id="question-title" value={title} placeholder="title" onChange={function(e){setTitle(e.target.value)}}></input>
        <input type="text" id="question-description" value={desc} placeholder="description" onChange={function(e){setDesc(e.target.value)}}></input>
        <select id={"new-question"} onChange={function(e){
                setType(e.target.value);}}>
        {options.map(option=>(
            <option value={option}>{option}</option>
        ))
        }
        
        </select>
        {["radiobutton", "dropdown"].includes(type) && <div>
                <input type="number" value={optionsCount} onChange={function(e) {setOptionsCount(e.target.value)}}></input>
                <button onClick={()=>{setAddOptions(!addOptions)}}> save options</button>
            </div>}
            {addOptions && <OptionsForm optionsCount={Number(optionsCount)}/>}
    </>
    )
}

export default NewQuestion;