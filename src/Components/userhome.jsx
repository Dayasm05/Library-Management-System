import { Routes, Route } from "react-router-dom";
import Booklist from "./booklist";
import Userdashboard from "./userdashboard";
import UserNavbar from "./usernavbar";
import ReadBooks from "./readbBooks";



const Userhome = () => {
    return ( 
        <div className="user_home">
<UserNavbar/>
<Routes>
 <Route path='/' element={<Userdashboard/>}/>
 <Route path='/book-list' element={<Booklist/>}/>
 <Route path="/book-list/:id" element={<ReadBooks/>}/>

</Routes>
        </div>
     );
}
 
export default Userhome;