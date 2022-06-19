import {useState, useEffect, useRef} from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Survey from "../components/Survey";

function SurveyPage(){
    const { state } = useLocation();
    console.log(state);
    const { survey } = state;
    return(
    <div className="survey-container page-content">

        <Survey survey={survey}/>
    </div>
    )
}

export default SurveyPage;