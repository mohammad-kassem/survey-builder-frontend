import { useState } from "react";
import Button from "./Button";
import AddQuestion from "./AddQuestion";
import NewQuestion from "./NewQuestion";


function AddHeader({showAddSurvey, onAdd}){
    const [showAddQuestion, setShowAddQuestion] = useState(false);
    return(
        <>
            <h2> Add Survey</h2>
            <Button
                color = {showAddSurvey ? "red" : "green"}
                text = {showAddSurvey ? "Cancel" : "Save"}
                onClick={onAdd}
            />
            {showAddSurvey && <AddQuestion showAddQuestion={showAddQuestion} onAdd={()=>{setShowAddQuestion(!showAddQuestion)}}/>}
            {showAddQuestion && <NewQuestion/>}
        </>
    )
}

export default AddHeader;