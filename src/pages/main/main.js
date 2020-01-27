import React from "react"
import "./main.css"

const Main = (props) => {
  return (
    <div className="bookdisplay">
      {props.books.map(eachBook =>
        <div key={eachBook.title} className="eachbookholder">
          <div style={{ backgroundImage: `url(${eachBook.imageUrl})` }} className="eachbookimage" />
          <h5 className="eachbooktitle">{eachBook.title}</h5>
          <h5 className="eachbookauthor">{eachBook.author}</h5>
        </div>
      )}

    </div>
  )
}

export default Main