import { useState, useEffect } from "react";

function OptionsForm({optionsCount}){
    const [options, setOptions] = useState(new Array(optionsCount).fill(""));
    console.log(optionsCount, options);
    function handleText(index, e){
        const temp = options.map(function(v, i){
            return (i !== index ? v : e.target.value);
        });
        setOptions(temp);
    }

    useEffect(() => {
        setOptions(new Array(optionsCount).fill(""));
      }, [optionsCount]);
    
    return (
        <form onSubmit={function(e) {
            e.preventDefault();
            let options_submitted = options;
        }}>
            {options.map((option, index) =>(
                <input type="text" value={option} required onChange={(e)=>handleText(index, e)}>
                </input>))}
            <button type="submit"></button>     
        </form>
    )
}

export default OptionsForm;