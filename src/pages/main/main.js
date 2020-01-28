import React from "react"
import "./main.css"
import { Link } from "react-router-dom"

const Main = (props) => {
  return (
    <div className="bookdisplay">
      {props.books.map(eachBook =>
        <div key={eachBook._id} className="eachbookholder">

          <section id={eachBook._id} onClick={(e) => props.bookIdHandle(e)} style={{ backgroundImage: `url(${eachBook.coverImgURL})` }} className="eachbookimage">
            <Link to={`/book/${eachBook._id}`}><section id={eachBook._id} onClick={(e) => props.bookIdHandle(e)} className="bookdetaillinksection"></section></Link>
            <small className="bookdelete" id={eachBook._id} onClick={(e) => props.bookIdHandle(e)}>Delete</small>
            <small className="bookedit" id={eachBook._id} onClick={(e) => props.bookIdHandle(e)}>Edit</small>
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