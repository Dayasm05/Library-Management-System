import Adminnavbar from "./adminnavbar";
import { Routes, Route } from "react-router-dom";
import Admindashboard from "./admindashboard";
import Booklist from "./booklist";
import Userslist from "./userlist";
import ReadBooks from "./readbBooks";
import Adduser from "./adduser";
import Addbooks from "./addbook";


const Adminhome = () => {
    return (
        <div className="main">
            <Adminnavbar />
            <Routes>
                <Route path="/" element={<Admindashboard/>}/>
                <Route path="/book-list" element={<Booklist/>} />
                <Route path="/user-list" element={<Userslist/>} />
                <Route path="/book-list/:id" element={<ReadBooks/>}/>
                
                <Route path= "/add-user" element={<Adduser/>}/>
                <Route path="/add-book" element={<Addbooks/>}/>
            </Routes>
        </div>
    );
}

export default Adminhome;