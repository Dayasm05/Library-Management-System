import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/adminlogin.css'

const AdminLogin = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()
    let login = (e) => {
        e.preventDefault();

        let data = [email, password]
        // admin validation -> setting default email and password
        if (email == "admin@gmail.com" && password == 1234) {
            navigate('/admin/')
        } else {
            alert('Invalid Credentials')
        }
    }
    return (
        <div className="adminlogin">
            <div className="formdiv">
                <h1 class="adh1">Login as Admin</h1>
                <div className="form_inputs">
                    <form action="" onSubmit={login}>
                        <div class="input_email">
                            <input class="i1" type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input_password">
                            <input class="i2" type="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button class="lgnbtn1">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default AdminLogin;