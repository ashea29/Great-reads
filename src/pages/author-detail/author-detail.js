import React, { Component } from "react"
import "./author-detail.css"


class AuthorDetail extends Component{

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }



  componentDidMount() {
    const { name }= this.props.match.params
    fetch(`https://great-reads-seir1118.herokuapp.com/authors/byName/${name}`)
      .then(res => res.json())
      .then(res => this.setState({ books: res.books }))
  }


  
  render(){
    if(this.state.books.length !== 0){
    return(
      <div className="authors-book">
        <h1>{this.props.match.params.name}</h1>
        
        {this.state.books.map(data =>
          <div key={data._id}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <img src={data.coverImgURL} alt={data.coverImgURL}></img>
            
          </div>
       )}

      </div>
    )
    }else{
      return(
        <div className="authors-book">
          <h1>{this.props.match.params.name}</h1>
        </div>)
    }
  }
}

export default AuthorDetail