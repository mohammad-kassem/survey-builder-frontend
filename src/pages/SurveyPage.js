import {useState, useEffect, useRef} from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Survey from "../components/Survey";

function SurveyPage(){
    const { state } = useLocation();
    const { survey } = state;
    const navigate=useNavigate();

    const [answers, setAnswers] = useState([]);
    function addAnswer(obj){
        let temp = [];
        let c = false;
        answers.forEach(answer => {
            if (Object.keys(answer)[0] == Object.keys(obj)[0]) {temp.push(obj); c =true}
            else temp.push(answer)
        });
        c == false && temp.push(obj)
        setAnswers(temp);
    };
    console.log(answers);
    
    function constructAnswers(answers){
        let temp=[];
        answers.forEach(answer => {
            let obj1={};
            obj1["question_id"] = Object.keys(answer)[0];
            obj1["answer"] = Object.values(answer)[0];
            temp.push(obj1);
        });
        let obj2 = {};
        obj2["questions"] = temp;
        return obj2;
    }

    async function addResponse(answers) {
        let token = localStorage.getItem("token");
        if (!token) navigate("/login");
        answers = constructAnswers(answers);
        answers = JSON.stringify(answers);
        // let data = new FormData();
        // data.append("answers", answers);
        // let obj ={};
        // obj["answers"] = answers;
        // console.log(JSON.stringify(data));
        const res = await fetch("http://127.0.0.1:8000/api/v1/user/add_response", {
          method: "POST",
          headers: {
            "Authorization" : `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: answers,
        });
        const response = await res.json();
        alert(response.message);
        if (response.status === "Success") navigate ("/");
      };


    return(
    <div className="survey-container page-content">

        <Survey survey={survey} answers={answers} addAnswer={addAnswer} user={true}  addResponse={addResponse} getResponseOnClick={false}/>
    </div>
    )
}

export default SurveyPage;