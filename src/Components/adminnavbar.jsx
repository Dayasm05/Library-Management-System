import { Link } from "react-router-dom";
import '../Styles/adminnavbar.css'

const Adminnavbar = () => {

    return (
        <div className="main">

            <div className="navbar">

                <h1 className="h1a">AdminPortal</h1>

                <ul>
                    <li><Link to="/admin/">Dash Board</Link></li>
                    <li> <Link to="/admin/add-book">Add Books</Link></li>
                    <li><Link to="/admin/add-user">Add Users</Link></li>
                    <li><Link to="/admin/book-list">Book List</Link></li>
                    <li><Link to="/admin/user-list">Users List</Link></li>
                </ul>

                <div className="logout">
                    <Link to='/' >Logout</Link>
                </div>

            </div>
        </div>
    );
}
export default Adminnavbar;