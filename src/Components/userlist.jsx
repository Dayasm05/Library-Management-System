import { useEffect, useState } from "react";
import '../Styles/userslist.css'


const Userslist = () => {
    let [user, setUser] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:2122/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    }, [])
    let remove = (id,name) => {
        setUser(user.filter(x => x.id !== id))
        alert(`${name} will be removed`)
    }

    return (
        <div className="mainforuser">
            
            {
                user.map((data) => (
                    <div className="left">
                        <h1>{data.name}</h1>
                        <h2>{data.age}</h2>
                        <h2>{data.email}</h2>
                        <h2>{data.phonenumber}</h2>
                        <button className="btnforuser" onClick={() => remove(data.id,data.name)}>Remove</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Userslist;