import React, { Component } from "react"
import "./author.css"

class Author extends Component{
  constructor ( props ) {
    super( props )
    this.state={
      author:["Harper Lee", "George R. R. Martin", "Ian Fleming", "Tana French"]
    }
  }

  render(){

    let authors = this.state.author.map(data => {
      return(
        <div key={data}>
          <h1>{data}</h1>
        </div>
      )
    })
    
    return(
      <div>
        <button>Add a new author</button>
        <h1>Author</h1>
        {authors}
      </div>
    )
  }
}

export default Author