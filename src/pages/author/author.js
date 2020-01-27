import React, { Component } from "react"
import "./author.css"

class Author extends Component{
  constructor ( props ) {
    super( props )
    this.state={
      author:["Harper Lee", "George R. R. Martin", "Ian Fleming", "Tana French"]
    }
  }

  renderAuthors = () => {
    let authors = this.state.author
    if (Object.keys(authors).length && authors.length){
      return(
        authors.map( author => {
          return(
            <div>
              <h1>{author.author}</h1>
            </div>
          )
        })
      )
    }
  }
  render(){
    return(
      <div>
        <h1>Author</h1>
        {this.renderAuthors}
      </div>
    )
  }
}

export default Author