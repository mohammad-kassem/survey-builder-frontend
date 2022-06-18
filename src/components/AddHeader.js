import { useState } from "react";
import Button from "./Button";

function AddHeader({showAddSurvey, onAdd}){
    return(
        <>
            <h2> Add Survey</h2>
            <Button
                color = {showAddSurvey ? "red" : "green"}
                text = {showAddSurvey ? "Cancel" : "Save"}
                onClick={onAdd}
            />
        </>
    )
}

export default AddHeader;