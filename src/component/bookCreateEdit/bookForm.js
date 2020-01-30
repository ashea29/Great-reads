import React from "react"
import "./bookForm.css"

const BookForm = (props) => {
  const bookFormHeader = props.bookAction === "create" ? "Create a New Book" : "Edit a Book"
  return (
    <div className={props.bookAction ? "block" : "none"}>
      <div className="overlay"></div>
      <div className="bookpopup">
        <span className="esc" onClick={props.escHandle}>X</span>
        <h3>{bookFormHeader}</h3>
        <form action="" className="bookinputholder">
          <input type="text" className={props.bookAction === "create" ? "bookname" : "bookeditname"} placeholder="Book's Name" name="title" onChange={e => props.inputHandle(e)} required />
          {props.bookAction === "create" ? <input type="text" className="bookauthor" placeholder="Book's Author" name="author" onChange={e => props.inputHandle(e)} required /> : <p></p>}
          <input type="url" className="bookurl" placeholder="Book Cover Url" name="url" onChange={e => props.inputHandle(e)} required />
          <textarea type="text" className="bookdetail" placeholder="...Detail" name="detail" onChange={e => props.inputHandle(e)} required />
          <button className="submitbutton" onClick={e => props.bookSubmitHandle(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default BookForm