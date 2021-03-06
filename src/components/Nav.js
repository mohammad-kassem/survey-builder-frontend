import { Link } from "react-router-dom";
import Profile from "../assets/user_pro.png";

function Nav(){
    return(
        <>
        <nav>
            <h1>Welcome User</h1>
            <h1><Link to="/user_responses">User Responses</Link></h1>
            <div id="profile-logo"><Link to="/login"><img src={Profile}/></Link></div>
        </nav>
        </>
    )
}

export default Nav;