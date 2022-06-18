import { useState } from "react";

function SurveyHeader({survey}){
    return(
        <div className="header-container">
            <h1> {survey.title}</h1>
            <p> {survey.description}</p>
        </div>
    )
}

export default SurveyHeader;
