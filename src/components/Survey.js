import { useState } from "react";
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


function Survey({survey, toSubmit, addSurvey}){
    let questions = survey.questions;
    return(
        <>
        <SurveyHeader survey={survey}/>
        <div className="survey-container">
        {questions.map((question)=>
            <>
            {question.type === "radiobutton" && <RadioButton question={question} options={question.options}/>}
            {question.type === "dropdown" && <Dropdown question={question} options={question.options}/>}
            {question.type === "date" && <Date question={question} options={question.options}/>}
            {question.type === "color" && <Color question={question} options={question.options}/>}
            {question.type === "image" && <Image question={question} options={question.options}/>}
            {question.type === "number" && <Number question={question} options={question.options}/>}
            {question.type === "range" && <Range question={question} options={question.options}/>}
            {question.type === "text" && <Text question={question} options={question.options}/>}
            {question.type === "textarea" && <Textarea question={question} options={question.options}/>}
            {question.type === "time" && <Time question={question} options={question.options}/>}
            </>
        )}
        {toSubmit && <button className="btn" onClick={addSurvey}></button>}
        </div>
        </>
    )
}

export default Survey;
