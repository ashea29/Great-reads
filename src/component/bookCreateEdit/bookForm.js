import React from "react"
import "./bookForm.css"
// axios put and post here. Class.
const BookForm = (props) => {
  const bookFormHeader = props.bookAction === "create" ? "Create a New Book" : "Edit a Book"
  return (
    <div className={props.bookAction ? "block" : "none"}>
      <div className="overlay"></div>
      <div className="bookpopup">
        <span className="esc" onClick={props.escHandle}>X</span>
        <h3>{bookFormHeader}</h3>
        <div className="bookinputholder">
          <input type="text" required className="bookname" placeholder="Book's Name" />
          <input type="text" required className="bookauthor" placeholder="Book's Author" />
          <input type="text" required className="bookurl" placeholder="Book Cover Url" />
          <textarea type="text" required className="bookdetail" placeholder="...Detail" />
          <button type="submit" className="submitbutton">Submit</button>
        </div>
      </div>
    </div>
  )
}
export default BookForm