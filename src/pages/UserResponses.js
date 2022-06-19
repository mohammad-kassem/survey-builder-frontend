import {useState, useEffect, useRef} from "react";
import SurveyHeader from "../components/SurveyHeader";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";



function UserResponses(){
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
        async function getResponses(){
          const surveys = await fetchUserResponses();
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
          return data.surveys;
        } catch (err) {
          console.log(err);
        }
      };

      return(
        <>
        <h1> Below are your completed surveys </h1>
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
