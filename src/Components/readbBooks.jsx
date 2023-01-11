import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Styles/Readbook.css'



const ReadBooks = () => {
    let params = useParams()
    let [data, setData] = useState([])
    useEffect(() => {
        
        let fetchData = async () => {
            let response = await fetch(`http://localhost:8989/books/${params.id}`)
            let data = await response.json()
            setData(data)
        }
        fetchData()
    })

    return (
        <div className="readbook">
            <h1> Title : {data.title}</h1>
            <b>"Short Description"</b>
            <h4> {data.shortDescription}</h4>
            <b>"Long Description"</b>
            <p>{data.longDescription}</p>

        </div>
    );
}

export default ReadBooks;