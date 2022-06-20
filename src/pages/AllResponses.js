import {useState, useEffect, useRef} from "react";
import SurveyHeader from "../components/SurveyHeader";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import SurveyAnswers from "../components/SurveyAnswers";



function AllResponses(){
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { survey } = state;
  let surveyID = survey.id;



    useEffect(() => {
        async function getResponses(){
          const responses = await fetchAllResponses();
          setResponses(responses);
        };
        getResponses();
      }, []);

      //Fetch All Responses from Backend
      async function fetchAllResponses(){
        let token = localStorage.getItem("token");
        if (!token) navigate("/login");
        try {
          const res = await fetch(`http://127.0.0.1:8000/api/v1/admin/get_responses/${surveyID}`,{
            headers: {"Authorization" : `Bearer ${token}`}
          });
          const data = await res.json();
          return data.responses;
        } catch (err) {
          console.log(err);
        }
      };

      return(
        <>
        <h1> Below are all the user responses </h1>
        <div className="surveys-container page-content">
        {responses.map(response=>(
          <>
          <SurveyAnswers survey={response}/>
          </>
      ))}
      </div>
      </>
  )

}

export default AllResponses;
