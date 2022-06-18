import { useState } from "react";
import Button from "./Button";

function AddQuestion({showAddQuestion, onAdd}){
    return(
        <>
            <h2> Add Question</h2>
            <Button
                color = {showAddQuestion ? "red" : "green"}
                text = {showAddQuestion ? "Cancel" : "Save"}
                onClick={onAdd}
            />

        </>
    )
}

export default AddQuestion;