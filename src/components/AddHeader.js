import { useState } from "react";
import Button from "./Button";
import AddQuestion from "./AddQuestion";
import NewQuestion from "./NewQuestion";
import SurveyDetails from "./SurveyDetails";


function AddHeader({showAddSurvey, onAdd, question, setQuestion}){
    const [showAddQuestion, setShowAddQuestion] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [details, setDetails] = useState("");


    function detailsHandler(title, description){
        setDetails({title:title, description:description});
        onAdd();
    }

    return(
        <>
            <h2> Add Survey</h2>
            {!showAddQuestion && <Button
                color = {showAddSurvey ? "red" : "green"}
                text = {showAddSurvey ? "Cancel" : "Save"}
                onClick={onAdd}
            />}
            {showAddSurvey && <SurveyDetails title={title} description={description} setTitle={setTitle} setDescription={setDescription} detailsHandler={detailsHandler} setShowAddQuestion={setShowAddQuestion}/>}
            {showAddQuestion && <AddQuestion showAddQuestion={showAddQuestion} onAdd={()=>{setShowAddQuestion(!showAddQuestion)}}/>}
            {showAddQuestion && <NewQuestion question={question} setQuestion={setQuestion}/>}
        </>
    )
}

export default AddHeader;