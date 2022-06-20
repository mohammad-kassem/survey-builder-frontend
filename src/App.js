import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Surveys from "./components/Surveys";
import SurveysPage from "./pages/SurveysPage";
import SurveyPage from "./pages/SurveyPage";
import UserResponses from "./pages/UserResponses";
import SurveyAnswers from "./components/SurveyAnswers";
import AllResponses from "./pages/AllResponses";
import AdminSurveysPage from "./pages/AdminSurveysPage";


function App() {
  
  const [surveys, setSurveys] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getSurveys(){
      const surveysFromServer = await fetchSurveys();
      setSurveys(surveysFromServer);
    };
    getSurveys();
  }, []);

  //Fetch All Surveys from Backend
  async function fetchSurveys(){
    let token = localStorage.getItem("token");
    if (!token) navigate("/login");
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/admin/get_surveys",{
        headers: {"Authorization" : `Bearer ${token}`}
      });
      const data = await res.json();
      return data.surveys;
    } catch (err) {
      console.log(err);
    }
  };
    
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
    if (response.user.role_id === 1) navigate ("/");
    else navigate("/all_surveys")
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
    if (response.status === "Success") navigate("/login")
  };

  return(
    <Routes>
      <Route path="/login" element = {
        <Login login={login} />
      }></Route>
      <Route path="/register" element = {
        <Register register={register}/>
      }></Route>
      <Route path="/survey_respond" element = {
        <SurveyPage/>
      }></Route>
      <Route path="/" element = {
        <SurveysPage surveys={surveys}/>
      }></Route>
      <Route path="/user_responses" element = {
        <UserResponses surveys={surveys}/>
      }></Route>
      <Route path="/all_responses" element = {
        <AllResponses/>
      }></Route>
      <Route path="/all_surveys" element = {
        <AdminSurveysPage surveys={surveys}/>
      }></Route>
    </Routes>
  )
}

export default App;
