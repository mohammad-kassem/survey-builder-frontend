import {useState, useEffect, useRef} from "react";
import AddHeader from "../components/AddHeader";
import Footer from "../components/Footer";
import AdminSurvey from "../components/AdminSurvey";
import AdminSurveys from "../components/AdminSurveys";



function AdminSurveysPage({surveys}){
    const [showAddSurvey, setShowAddSurvey] = useState(false);
    const [showSubmitSurvey, setShowSubmirSurvey] = useState(true);
    const [question, setQuestion] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [details, setDetails] = useState({});
    const firstUpdate = useRef(true);

    let survey = {...details, questions:questions};
    console.log(JSON.stringify(survey));
    console.log(questions);

    //add survey
    async function addSurvey() {
    console.log(JSON.stringify(survey));
    let data = new FormData();
    data.append("survey", survey);
    console.log(data);
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/add_survey", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
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
        <div className="survey-container page-content">
            <AddHeader showAddSurvey={showAddSurvey} setShowAddSurvey={()=>{setShowAddSurvey(!showAddSurvey)}} question={question} setQuestion={setQuestion} setDetails={setDetails}/>
            {questions.length != [] && (showSubmitSurvey && <AdminSurvey survey={survey} toSubmit={true} addSurvey={addSurvey}/>)}
        </div>
        <>
            <AdminSurveys surveys={surveys}/>
        </>
        </>
    )
}

export default AdminSurveysPage;