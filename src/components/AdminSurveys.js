import { useState } from "react";
import AdminSurvey from "./AdminSurvey";

function AdminSurveys({surveys}){
    const [surveyID, setSurveyID] = useState(); 
    return(
        <div className="surveys-container page-content">
        
            {surveys.map((survey, i)=>(
                <div key={i}>
                <AdminSurvey survey={survey} surveyID={surveyID} setSurveyID={setSurveyID}/>
                </div>
            ))}
        </div>
    )
}

export default AdminSurveys;
