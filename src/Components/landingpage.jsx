import { Link } from "react-router-dom";
import '../Styles/landingpage.css'


const Landingpage = () => {

    return (
        <div className="landingpage">
            <div className="selectlogin">
                <h1 class="h1main">Library Management System</h1>
                <img class="adimnlogo" src='../Images/adminlogo.png' height='100px' width='100px' alt="" />
                <img class="userlogo" src='../Images/userlogo.png' height='100px' width='100px' alt="" />

                <Link class="admin1" to='/admin-login' >Admin Login</Link>
                <Link class="user1" to='/user-login' >User Login</Link>
            </div>
        </div>
    )
}
export default Landingpage;