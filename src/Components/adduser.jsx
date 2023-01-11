import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/addusers.css'


const Adduser = () => {
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [email, setEmail] = useState("")
    let [phonenumber, setPhonenumber] = useState("")
let navigate = useNavigate()

    let handlesubmitt = (e) => {
        e.preventDefault()
        let UserData = {name,age,email,phonenumber}
        fetch('http://localhost:8989/users',{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(UserData)
        })
        alert('User Added Successfully !!')
        navigate('/admin/user-list')
    }



    return (
        <div className="add_user">
            <h1 className='uoi'>Add Users</h1>
            <form  action="" onSubmit={handlesubmitt}>
                <div className="username">
                    <label htmlFor="">Name : </label>

                    <input className='k1' type="text" placeholder="Enter user name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="userage">
                    <label htmlFor="">User age : </label>

                    <input className='k2' type="number" min="1" placeholder="Enter user age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="user_email">
                    <label htmlFor="">Email : </label>
                    <input className='k3' type="email" placeholder="Enter user email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="user_phone">
                    <label htmlFor="">Phone no : </label>
                    <input className='k4' type="tel" minLength="10" maxLength="10" placeholder="Enter user Phone number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                </div><br />
                <button className='btni'>ADD</button>

            </form>

        </div>
    );
}

export default Adduser;