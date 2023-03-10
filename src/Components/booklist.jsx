import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../Styles/booklist.css'
import { useLocation } from "react-router-dom";



const Booklist = () => {
    let [Books, setBooks] = useState([])
    let location = useLocation()
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:1000/books')
            let book = await response.json()
            setBooks(book)
        }
        fetchData()

    }, [Books])
    // Delete a book from a server..
    let handleDelete = (id, title) => {
        // setBooks(Books.filter(x => x.id !== id))
        // alert(`${title} will br removed !`)?>?>
        fetch(`http://localhost:1000/books/${id}`, {
            method: 'DELETE'

        });
        alert(`${title} will be deleted permanently`)

    }

    let navigate = useNavigate()
    let handleRead = (id) => {
        if (location.pathname =='/admin/book-list') {
            navigate(`/admin/book-list/${id}`)
            
        } else {
            navigate(`/user/book-list/${id}`)
        }
    }

    return (
        <div className="main">
            <h1 class="booklisttt">Book List : {Books.length}</h1>
            <div className="jjj">
                <div className="books_section">
                    {Books.map((book) => (

                        <div className="edit">
                            <div className="book_image">
                                <img height="200px" width="180px" src={book.thumbnailUrl} />
                            </div>
                            <div className="book_card">
                                <h1>Title:{book.title}</h1>
                                <h3>Author:{book.authors}</h3>
                                <h5> pageCount:{book.pageCount}</h5>
                                <button className="readd" onClick={() => handleRead(book.id)}>Read more</button>
                                { location.pathname == '/admin/book-list' && <button class="btnn" onClick={() => handleDelete(book.id, book.title)}>Delete</button> }



                            </div>

                        </div>
                    ))}
                </div>


            </div>


        </div>
    );
}

export default Booklist;