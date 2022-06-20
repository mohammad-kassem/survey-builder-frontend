import { Link } from "react-router-dom";
import Profile from "../assets/user_pro.png";

function AdminNav(){
    return(
        <>
        <nav>
            <h1>Welcome Admin</h1>
            <div id="profile-logo"><Link to="/login"><img src={Profile}/></Link></div>
        </nav>
        </>
    )
}

export default AdminNav;