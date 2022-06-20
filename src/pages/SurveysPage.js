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

    let survey = {...details, questions:questions};
    console.log(JSON.stringify(survey));
    console.log(questions);

    //add survey
    async function addSurvey(selectedsurvey) {
    console.log(JSON.stringify(survey));
    let token = localStorage.getItem("token");
    if (!token) navigate("/login");
    let data = new FormData();
    data.append("survey", survey);
    console.log(data);
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/add_survey", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
      body: data,
    });
    const response = await res.json();
  };


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