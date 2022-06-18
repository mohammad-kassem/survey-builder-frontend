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


function Survey({survey}){
    let questions = survey.questions;
    return(
        <>
        <SurveyHeader survey={survey}/>
        <div className="survey-container">
        {questions.map(question=>(
            question.type === "radiobutton" && <RadioButton question={question} options={question.options}/>
        ))
        }
        </div>
        </>
    )
}

export default Survey;
