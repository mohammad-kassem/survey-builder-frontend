import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Text from "./components/Text";
import Textarea from "./components/Textarea";
import RadioButton from "./components/RadioButton";
import Date from "./components/Date";





function App() {
   const navigate = useNavigate();
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
        <Date question={question} answer={answer} options={options}/>
      }></Route>
    </Routes>
  )
}

export default App;
