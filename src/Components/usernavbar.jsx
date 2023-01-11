import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="main">

            <div className="navbar">

                <h1 className="h1a">UserPortal</h1>

                <ul>
                    <li><Link to="/user/">Dash Board</Link></li>
                    
                    
                    <li><Link to="/user/book-list">Book List</Link></li>
                    
                </ul>

                <div className="logout">
                    <Link to='/' >Logout</Link>
                </div>

            </div>
        </div>
     );
}
 
export default UserNavbar;