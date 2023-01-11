import { useNavigate } from "react-router-dom";
import '../Styles/userlogin.css'
const UserLogin = ()=>{
    let navigate = useNavigate()
    let login = () =>{
navigate ('/user/')
    }
    return(
        <div className="userlogin">
            <div  className="formdiv">
                <h1 className="adh1" >Login as User</h1>
                <div className="form_inputs">
                    <form action="" onSubmit={login}>
                        <div className="input_email">
                            <input className="i1" type="email" required placeholder="Enter your email" />
                        </div>
                        <div className="input_password">
                            <input className="i2" type="password" required placeholder="Enter your password" />
                        </div>
                        <button className="lgnbtn2">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default UserLogin;