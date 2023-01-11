import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/addbook.css'



const Addbooks = () => {
    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setLongDescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")
    
    let navigate = useNavigate()

    let handleSubmit =(e)=>{
        e.preventDefault();
        //data to be posted
        let bookdata = {title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl}

        //posting to server
        fetch('http://localhost:2122/books',{
            method : 'POST',
            headers :{'Content-Type':'application/json'},
            body:JSON.stringify(bookdata)
        })
        alert(`added successfully`)
        navigate('/admin/book-list')
        
    }
   


    return (
        <div className="addbooks">
            <h1>Add a Book</h1>
            <div className="formforaddbook">
                <form action="" onSubmit={handleSubmit}>
                    <div className='title'>
                        <input type="text" width="300px" required placeholder='Enter Book Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className='authors'>
                        <input type="text" required placeholder='Enter Book authors' value={authors} onChange={(e)=>setAuthors(e.target.value)} />

                    </div>
                    <div className='categories'>
                        <input type="text" required placeholder='Enter Book categorie' value={categories} onChange={(e)=>setCategories(e.target.value)} />


                    </div>
                    <div className='pageCount'>
                        <input type="number" required placeholder='Enter book pages' value={pageCount} onChange={(e)=>setPageCount(e.target.value)} />


                    </div>
                    <div className='ShortDescription'>
                        <textarea placeholder='Short Description' name="" id="" cols="25" rows="10" value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)}></textarea>


                    </div>
                    <div className='LongDescription'>
                        <textarea name="" placeholder='Long Description' id="" cols="25" rows="10" value={longDescription} onChange={(e)=>setLongDescription(e.target.value)}></textarea>


                    </div>
                    <div className='thumbnailUrl'>
                        <input type="text" required placeholder='Image' value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} />

                    </div>

                    <button className='addbookbtn'>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default Addbooks;


//title,categories, pageCount, thumbnailUrl , shortDescription , longDescription