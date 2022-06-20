import { useState } from "react";
import Survey from "./Survey";

function Surveys({surveys}){
    const [surveyID, setSurveyID] = useState(); 
    return(
        <div className="surveys-container page-content">
        
            {surveys.map((survey, i)=>(
                <div key={i}>
                <Survey survey={survey} surveyID={surveyID} setSurveyID={setSurveyID}/>
                </div>
            ))}
        </div>
    )
}

export default Surveys;
