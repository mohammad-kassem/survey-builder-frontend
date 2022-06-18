import { useState } from "react";
import Survey from "./Survey";

function Surveys({surveys}){
    return(
        surveys.map(survey=>(
            <Survey survey={survey}/>
        ))
    )
}

export default Surveys;
