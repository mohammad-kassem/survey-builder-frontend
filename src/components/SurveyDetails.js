/* eslint-disable */


function SurveyDetails({detailsHandler, title, description, setTitle, setDescription, setShowAddQuestion}){
    return(
        <form onSubmit={function(e){e.preventDefault(), detailsHandler(title, description), setShowAddQuestion(true)}}>
            <input type="text" value={title} placeholder="Title" required onChange={function(e){setTitle(e.target.value)}}></input>
            <input type="text" className="description" value={description} placeholder="description" required onChange={function(e){setDescription(e.target.value)}}></input>
            <div className="btn-container"><div></div><button className="btn" type="submit">Save</button></div>
        </form>
    )
}

export default SurveyDetails;