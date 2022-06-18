import { useState } from "react";
import Survey from "./Survey";

function Surveys({surveys}){
    return(
        <div className=" surveys-container page-content">
        
            {surveys.map(survey=>(
                <div>
                <Survey survey={survey}/>
                </div>
            ))}
        </div>
    )
}

export default Surveys;
