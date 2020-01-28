import React, { Component } from "react"
import "./author.css"
import AuthorForm from "./authorCreate/authorForm"
import { Link } from 'react-router-dom'

class Author extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authors: [],
      authorAction: "create",
      authorName: ""
    }
  }

  componentDidMount() {
    this.getAuthor()
  }
  componentDidUpdate() {
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
    console.log('works')
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
  }
  render() {
    return (
      <div>

        <AuthorForm authorAction={this.state.authorAction} escHandle={this.escHandle}
          authorSubmitHandle={this.authorSubmitHandle}
          authorInputHandle={e => this.authorInputHandle(e)}
        />
        <button onClick={this.createAuthorHandle}>Create a new Author</button>
        {this.state.authors.map(data =>
          <div key={data._id}>
            <Link to={`/author-detail/${data._id}`}><h3>{data.name}</h3></Link>
          </div>
        )}
      </div>
    )
  }
}
export default Author