import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Components/landingpage';
import AdminLogin from './Components/adminlogin';
import UserLogin from './Components/userlogin';
import Adminhome from './Components/adminhome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin/*" element={<Adminhome />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
