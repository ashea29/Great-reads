import React, { Component } from "react"
import "./author.css"
import AuthorForm from "./authorCreate/authorForm"
import axios from 'axios'

class Author extends Component{
  constructor ( props ) {
    super( props )
    this.state={
      author:[],
      authorAction: ""
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData () {
      const url = "https://great-reads-seir1118.herokuapp.com/authors";
      axios.get(url).then(res => {
        this.setState({
          author: res.data
        });
      });
    }

  escHandle = () => {
    this.setState({ bookAction: "" })
  }

  render(){

    let authorDetail =() => {
      console.log('authorDetail')
    }
    let authors = this.state.author.map(data => {
      return(
        <div className="author" key={data.name} onClick={authorDetail} >
          <h3>{data.name}</h3>
        </div>
      )
    })

    let addAuthor = ()=>{
      console.log("addAuthor")
      this.setState({
        
      })
    }
    
    return(
      <div>
        <button onClick={addAuthor}>Add a new author</button>
        <AuthorForm authorAction={this.state.authorAction} escHandle={this.escHandle}/>
        <div className="authors">
          {authors}
        </div>
        
      </div>
    )
  }
}

export default Author