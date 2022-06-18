import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Survey from "./components/Survey";








function App() {
   const navigate = useNavigate();
    let survey ={
      "id": 1,
      "title": "first",
      "description": "bleh",
      "created_at": "2022-06-17T17:42:10.000000Z",
      "updated_at": "2022-06-17T17:42:10.000000Z",
      "questions": [
          {
              "id": 1,
              "text": "bdjh",
              "survey_id": 1,
              "type": "radiobutton",
              "created_at": "2022-06-17T17:42:10.000000Z",
              "updated_at": "2022-06-17T17:42:10.000000Z",
              "options": [
                  {
                      "id": 1,
                      "option": "1",
                      "question_id": 1,
                      "created_at": "2022-06-17T17:42:10.000000Z",
                      "updated_at": "2022-06-17T17:42:10.000000Z"
                  },
                  {
                      "id": 2,
                      "option": "0",
                      "question_id": 1,
                      "created_at": "2022-06-17T17:42:10.000000Z",
                      "updated_at": "2022-06-17T17:42:10.000000Z"
                  }
              ]
          },
          {
              "id": 2,
              "text": "test",
              "survey_id": 1,
              "type": "radiobutton",
              "created_at": "2022-06-17T17:42:10.000000Z",
              "updated_at": "2022-06-17T17:42:10.000000Z",
              "options": [
                  {
                      "id": 3,
                      "option": "1",
                      "question_id": 2,
                      "created_at": "2022-06-17T17:42:10.000000Z",
                      "updated_at": "2022-06-17T17:42:10.000000Z"
                  },
                  {
                      "id": 4,
                      "option": "0",
                      "question_id": 2,
                      "created_at": "2022-06-17T17:42:10.000000Z",
                      "updated_at": "2022-06-17T17:42:10.000000Z"
                  }
              ]
          }
      ]
    }

   let question={
    id: 1,
    text: "bdjh",
    survey_id: 1};
  
  let answer = {};

  let options =[{
    id: 1,
    option: "yes",
    question_id: 1
  }, {
    id: 2,
    option: "no",
    question_id: 1}
  ]
  //login
  async function login(cridentials) {
    let data = new FormData();
    data.append("email", cridentials.email);
    data.append("password", cridentials.password);
    const res = await fetch("http://127.0.0.1:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cridentials),
    });
    const response = await res.json();
    localStorage.setItem("token", response.access_token);
    if (response.access_token) navigate ("/");
  };

  //register
  async function register(cridentials) {
    let data = new FormData();
    data.append("fname", cridentials.fname);
    data.append("lname", cridentials.lname);
    data.append("email", cridentials.email);
    data.append("password", cridentials.password);
    const res = await fetch("http://127.0.0.1:8000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cridentials),
    });
    const response = await res.json();
    if (response.status === "Success") navigate ("/login")
  };

  return(
    <Routes>
      <Route path="/login" element = {
        <Login login={login} />
      }></Route>
      <Route path="/register" element = {
        <Register register={register}/>
      }></Route>
      <Route path="/" element = {
        <Survey survey={survey} answer={answer} options={options}/>
      }></Route>
    </Routes>
  )
}

export default App;
