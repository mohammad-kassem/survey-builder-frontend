import {useState} from "react";
import AddHeader from "../components/AddHeader";
import Footer from "../components/Footer";
import Surveys from "../components/Surveys";


function SurveysPage({surveys}){
    const [showAddSurvey, setShowAddSurvey] = useState(false);
    console.log(showAddSurvey);
    return (
        <>
        <div className="survey-container page-content">
            <AddHeader showAddSurvey={showAddSurvey} onAdd={()=>{setShowAddSurvey(!showAddSurvey)}}/>
            <div>
            {showAddSurvey && <Footer/>}
            </div>
        </div>
        <>
            <Surveys surveys={surveys}/>
        </>
        </>
    )
}

export default SurveysPage;