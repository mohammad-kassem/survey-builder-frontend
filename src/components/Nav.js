import { Link } from "react-router-dom";
import Profile from "../assets/user_pro.png";

function Nav(admin){
    return(
        <>
        <nav>
            {admin == false ? <h1>Hello User</h1> : <h1>Hello Admin</h1>}
            <div id="profile-logo"><Link to="/login"><img src={Profile}/></Link></div>
        </nav>
        </>
    )
}

export default Nav;