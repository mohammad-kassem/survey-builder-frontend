/* eslint-disable */


function SurveyDetails({detailsHandler, title, description, setTitle, setDescription, setShowAddQuestion}){
    return(
        <form onSubmit={function(e){e.preventDefault(), detailsHandler(title, description), setShowAddQuestion(true)}}>
            <input type="text" value={title} placeholder="Title" required onChange={function(e){setTitle(e.target.value)}}></input>
            <input type="text" value={description} placeholder="description" required onChange={function(e){setDescription(e.target.value)}}></input>
            <button type="submit"></button>
        </form>
    )
}

export default SurveyDetails;