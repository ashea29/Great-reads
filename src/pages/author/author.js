import React, { Component } from "react"
import "./author.css"
import AuthorForm from "./authorCreate/authorForm"

class Author extends Component{
  constructor ( props ) {
    super( props )
    this.state={
      author:["Harper Lee", "George R. R. Martin", "Ian Fleming", "Tana French"],
      // authorAction: "edit"
    }
  }

  render(){

    let authors = this.state.author.map(data => {
      return(
        <div className="authors"key={data} >
          <h3>{data}</h3>
        </div>
      )
    })
    
    return(
      <div>
        <h1>Authors</h1>
        <AuthorForm authorAction={this.state.authorAction} />
        <button>Add a new author</button>
        {authors}
      </div>
    )
  }
}

export default Author