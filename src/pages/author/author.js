import React, { Component } from "react"
import "./author.css"
import AuthorForm from "./authorCreate/authorForm"
import { Link } from 'react-router-dom'

class Author extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authors: [],
      authorAction: "",
      authorName: "",

      newAuthorAdded: false,
      authorDetail: ""
    }
  }

  componentDidMount() {
    this.getAuthor()
  }

  getAuthor() {
    fetch('https://great-reads-seir1118.herokuapp.com/authors')
      .then(res => res.json())
      .then(res => this.setState({ authors: res }))
  }
  escHandle = () => {
    this.setState({ authorAction: "" })
  }
  createAuthorHandle = () => {
    this.setState({ authorAction: "create" })
  }
  authorInputHandle = (e) => {
    const value = e.target.value
    this.setState({ authorName: value })
  }
  authorSubmitHandle = (e) => {
    e.preventDefault()
    const url = "https://great-reads-seir1118.herokuapp.com/authors"
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.authorName
      })
    }).then((res) => res.json())
      .then(() => this.getAuthor())
  }


  render() {

    return (
      <div>

        <AuthorForm authorAction={this.state.authorAction} escHandle={this.escHandle}
          authorSubmitHandle={this.authorSubmitHandle}
          authorInputHandle={e => this.authorInputHandle(e)}
        />

        <div className="authorholder">
          <div className="addauthor">
            <button onClick={this.createAuthorHandle}>Create a new Author</button>
          </div>

          {this.state.authors.map(data =>
            <div key={data._id} className='author' >
              <Link to={`/author/${data.name}`} style={{ textDecoration: 'none', color: 'black' }}>
                <h3 className='name'>{data.name}</h3>
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Author