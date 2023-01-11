import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ReadBooks = () => {
    let params = useParams()
    let [data, setData] = useState([])
    useEffect(() => {
        
        let fetchData = async () => {
            let response = await fetch(`http://localhost:7777/books/${params.id}`)
            let data = await response.json()
            setData(data)
        }
        fetchData()
    })

    return (
        <div className="readbook">
            <h1>{data.title}</h1>
            <h4>{data.shortDescription}</h4>
            <p>{data.longDescription}</p>

        </div>
    );
}

export default ReadBooks;