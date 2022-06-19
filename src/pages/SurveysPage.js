import {useState, useEffect, useRef} from "react";
import AddHeader from "../components/AddHeader";
import Footer from "../components/Footer";
import Survey from "../components/Survey";
import Surveys from "../components/Surveys";



function SurveysPage({surveys}){
    const [showAddSurvey, setShowAddSurvey] = useState(false);
    const [question, setQuestion] = useState([]);
    const [questions, setQuestions] = useState([]);
    const firstUpdate = useRef(true);


    let survey = {title:"jhjh", description:"jhjjh", questions:questions};
    console.log(showAddSurvey);
    console.log(question);
    console.log(questions);
    console.log(questions);


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
            <AddHeader showAddSurvey={showAddSurvey} onAdd={()=>{setShowAddSurvey(!showAddSurvey)}} question={question} setQuestion={setQuestion}/>
            <div>
            {showAddSurvey && <Footer/>}
            </div>
            {questions.length != [] && <Survey survey={survey}/>}
        </div>
        <>
            <Surveys surveys={surveys}/>
        </>
        </>
    )
}

export default SurveysPage;