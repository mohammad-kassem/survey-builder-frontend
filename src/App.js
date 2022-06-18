import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
   const navigate = useNavigate();

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
  const register = async (cridentials) => {
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
    </Routes>
  )
}

export default App;
