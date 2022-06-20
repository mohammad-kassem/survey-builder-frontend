import {useState, useEffect, useRef} from "react";
import AddHeader from "../components/AddHeader";
import Footer from "../components/Footer";
import Survey from "../components/Survey";
import Surveys from "../components/Surveys";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";



function SurveysPage({surveys}){
    const [showAddSurvey, setShowAddSurvey] = useState(false);
    const [showSubmitSurvey, setShowSubmirSurvey] = useState(true);
    const [question, setQuestion] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [details, setDetails] = useState({});
    const firstUpdate = useRef(true);
    console.log(details);

    const navigate = useNavigate();

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
          }
        if (questions.length)
        setQuestions([...questions, question]);
        else setQuestions([question]);
      }, [question]);

    return (
        <>
            <Surveys surveys={surveys}/>
        </>
    )
}

export default SurveysPage;