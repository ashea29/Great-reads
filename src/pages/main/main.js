import React from "react"
import "./main.css"

const Main = (props) => {
  return (
    <div className="bookdisplay">
      {props.books.map(eachBook =>
        <div key={eachBook.title} className="eachbookholder">
          <section style={{ backgroundImage: `url(${eachBook.coverImgURL})` }} className="eachbookimage">
            <small className="bookdelete" >Delete</small>
            <small className="bookedit" id={eachBook._id} onClick={(e) => props.bookEditHandle(e)}>Edit</small>
          </section>
          <section>
            <p className="eachbooktitle">{eachBook.title}</p>
            <p className="eachbookauthor">{eachBook.author.name}</p>
          </section>
        </div>
      )}

    </div>
  )
}

export default Main