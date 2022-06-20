import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Text from ".//Text";
import Textarea from ".//Textarea";
import RadioButton from "./RadioButton";
import Date from ".//Date";
import Time from ".//Time";
import Color from ".//Color";
import Number from ".//Number";
import Range from ".//Range";
import Dropdown from ".//Dropdown";
import Image from ".//Image";
import SurveyHeader from "./SurveyHeader";


function Survey({survey, toSubmit, addSurvey, user,surveyID, setSurveyID, answers, addAnswer, addResponse, getResponseOnClick}){
    let questions = survey.questions;
    const navigate = useNavigate();

    return(
        <div id={survey.id} onClick={(e)=>{{getResponseOnClick && setSurveyID(e.target.id)}; {getResponseOnClick && navigate('/survey_respond',{replace: false, state: {survey:survey}})}}}>
        <SurveyHeader survey={survey}/>
        <form className="survey-container" onSubmit={(e)=>{e.preventDefault(); addResponse(answers)}}>
        {questions.map((question, i)=>
            <div key={i}>
            {question.type === "radiobutton" && <RadioButton question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "dropdown" && <Dropdown question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "date" && <Date question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "color" && <Color question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "image" && <Image question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "number" && <Number question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "range" && <Range question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "text" && <Text question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "textarea" && <Textarea question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            {question.type === "time" && <Time question={question} options={question.options} answers={answers} addAnswer={addAnswer}/>}
            </div>
        )}
        <div className="btn-container"><div></div>{toSubmit && <button className="btn" onClick={addSurvey}>Submit</button>}</div>
        <div className="btn-container"><div></div>{user && <button type="submit" className="btn" onClick={addSurvey}>Submit</button>}</div>
        </form>
        </div>
    )
}

Survey.defaultProps = {
    getResponseOnClick: true 
}

export default Survey;
