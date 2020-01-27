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
          <h3>{data}</h3>
        </div>
      )
    })
    
    return(
      <div>
        <h1>Authors</h1>
        <button onClick={() => {}}>Add a new author</button>
        {authors}
      </div>
    )
  }
}

export default Author