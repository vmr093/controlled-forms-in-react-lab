import { useState } from "react";
import "../../App.css"

const BookShelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    })      

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, {title: newBook.title, author: newBook.author}])
        setNewBook({title: '', author: '',})
    }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <label htmlFor="title">Title: </label>
        <input id="title" name="title" value={newBook.title} onChange={handleInputChange} />
        <label htmlFor="author">Author: </label>
        <input id="author" name="author" value={newBook.author} onChange={handleInputChange} />
        <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">{
        books.map(book => (
            <div className="bookCard">
                <h4>{book.title}</h4>
                <span>Author: {book.author}</span>
            </div>
        ))
    }</div>
    </div>
  );
};

export default BookShelf;