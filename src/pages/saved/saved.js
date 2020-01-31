import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./saved.css"
import "../book-detail/book-detail.css"

const Saved = (props) => {
  return (
    <div className="savedbook">
      <h1>My favourite book(s)</h1>
      <div className="bookdisplay">
        {props.savedBookId.map((eachBook, i) =>
          <div key={eachBook._id} className="eachbookholder">
            <section style={{ backgroundImage: `url(${eachBook.coverImgURL})` }} className="eachbookimage">
              <div id={eachBook._id} onClick={(e) => props.bookIdHandle(e)}>
                <Link to={`/book/${eachBook._id}`}><section id={eachBook._id} className="bookdetaillinksection">  </section></Link>
              </div>
              <small className="bookdelete" index={i} onClick={e => props.removeHandle(e)}>Remove</small>
            </section>
            <section>
              <Link to={`/book/${eachBook._id}`} className="eachbooktitleholder">
                <p className="eachbooktitle">{eachBook.title}</p>
              </Link>
              <Link to={`/author/${eachBook.author}`} className="eachbookauthorholder">
                <p className="eachbookauthor" >{eachBook.author}</p>
              </Link>
            </section>
          </div>
        )}
      </div>
    </div >
  )
}



export default Saved