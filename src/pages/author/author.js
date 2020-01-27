import React, { Component } from "react"
import "./author.css"
import AuthorForm from "./authorCreate/authorForm"
import axios from 'axios'

class Author extends Component{
  constructor ( props ) {
    super( props )
    this.state={
      author:[],
      // authorAction: "create"
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData () {
      const url = "https://great-reads-seir1118.herokuapp.com/authors";
      axios.get(url).then(res => {
        console.log(res.data)
        this.setState({
          author: res.data
        });
      });
    }

  escHandle = () => {
    this.setState({ bookAction: "" })
  }

  render(){
  
    let authors = this.state.author.map(data => {
      return(
        <div className="authors"key={data} >
          <h3>{data.name}</h3>
        </div>
      )
    })
    
    return(
      <div>
        <AuthorForm authorAction={this.state.authorAction} escHandle={this.escHandle} />
        <button>Add a new author</button>
        <div className="authors">
          {authors}
        </div>
      </div>
    )
  }
}

export default Author