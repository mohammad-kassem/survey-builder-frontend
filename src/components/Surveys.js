import { useState } from "react";
import Survey from "./Survey";

function Surveys({surveys}){
    const [surveyID, setSurveyID] = useState(); 
    console.log(surveyID);
    return(
        <div className=" surveys-container page-content">
        
            {surveys.map(survey=>(
                <>
                <Survey survey={survey} surveyID={surveyID} setSurveyID={setSurveyID}/>
                </>
            ))}
        </div>
    )
}

export default Surveys;
