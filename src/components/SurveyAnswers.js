import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Answer from "./Answer";
import SurveyHeader from "./SurveyHeader";


function SurveyAnswers({survey, setSurveyID}){
    let questions = survey.questions;

    return(
        <div id={survey.id} onClick={(e)=>{setSurveyID(e.target.id)}}>
        <SurveyHeader survey={survey}/>
        <div className="survey-container">
        {questions.map((question, i)=>
        <div key={i}>
            <>
            {<Answer question={question}/>}
            </>
            <div className="answers-container">
            {question.answers.map((answer, j)=>
                <div key={j} className="answer">
                    <p>user id {answer.user_id} : {answer.value}</p>
                </div>)}
            </div>
        </div>
        )}
        </div>
        </div>
    )
}

export default SurveyAnswers;