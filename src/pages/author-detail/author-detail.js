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
      <div className='name'>
        <h1>{this.props.match.params.name}</h1>
      </div>
        
        
        {this.state.books.map(data =>
          <div key={data._id}>
            <div className= 'img-holder'>
              <img src={data.coverImgURL} alt={data.coverImgURL} className="cover-image"></img>
            </div>
            <div className= 'details'>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
            
            
          </div>
       )}

      </div>
    )
    }else{
      return(
        <div className="authors-book">
          <div className='details'>
            <h1>{this.props.match.params.name}</h1>
          </div>
          
        </div>)
    }
  }
}

export default AuthorDetail