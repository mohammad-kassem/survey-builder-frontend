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

function Survey({survey}){
    let questions = survey.questions;
    console.log(questions);
    return(
        <>
        <h1> {survey.title}</h1>
        <h1> {survey.description}</h1>
        <div>
        {questions.map(question=>(
            question.type === "radiobutton" && <RadioButton question={question} options={question.options}/>
        ))
        }
        </div>
        </>
    )
}

export default Survey;
