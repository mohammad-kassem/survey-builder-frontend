import {useState, useEffect, useRef} from "react";
import SurveyHeader from "../components/SurveyHeader";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";



function UserResponses(){
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
        async function getResponses(){
          const surveys = await fetchUserResponses();
          console.log(surveys);
          setSurveys(surveys);
        };
        getResponses();
      }, []);
    
      //Fetch User Responses from Backend
      async function fetchUserResponses(){
        let token = localStorage.getItem("token");
        if (!token) navigate("/login");
        try {
          const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_completed_surveys",{
            headers: {"Authorization" : `Bearer ${token}`}
          });
          const data = await res.json();
          let surveys = data.surveys;
          let newArray = surveys.filter(function (survey) {
            console.log(survey.questions[0].answers);
            return survey.questions[0].answers !== [];
          });
          console.log(newArray);
          return newArray;
        } catch (err) {
          console.log(err);
        }
      };

      return(
        <>
        <h1> Your completed surveys </h1>
        <div className="surveys-container page-content">
        {surveys.map(survey=>(
          <>
          <SurveyHeader survey={survey}/>
          </>
      ))}
      </div>
      </>
  )

}

export default UserResponses;
