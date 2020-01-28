import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Main from "./pages/main/main"
import Header from "./component/header/header"
import BookDetail from "./pages/book-detail/book-detail"
import BookForm from "./component/bookCreateEdit/bookForm"
import Authors from "./pages/author/author"
import AuthorDetail from "./pages/author-detail/author-detail"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      bookAction: "",
      bookClicked: "",

      bookAuthor: "",
      bookTitle: "",
      bookUrl: "",
      bookDetail: "",
    }
  }
  componentDidMount() {
    this.getBooks()
  }
  componentDidUpdate() {
    this.getBooks()
  }
  getBooks() {
    fetch("https://great-reads-seir1118.herokuapp.com/")
      .then(res => res.json())
      .then(res => this.setState({ books: res }))
  }

  bookCreateHandle = () => {
    this.setState({ bookAction: "create" })
  }
  bookIdHandle = (e) => {
    const editedBook = e.target.attributes.getNamedItem('id').value
    this.setState({ bookClicked: editedBook })
    if (e.target.innerText.toLowerCase() === "edit") { this.setState({ bookAction: "edit" }); console.log("edite") }
    else if (e.target.innerText.toLowerCase() === "delete") {
      const url = `https://great-reads-seir1118.herokuapp.com/books/${editedBook}`
      console.log("delete", url)
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(() => console.log('sdsd'))
        // .then(() => this.getBooks())
    }
  }
  escHandle = () => {
    this.setState({ bookAuthor: "" })
    this.setState({ bookTitle: "" })
    this.setState({ bookDetail: "" })
    this.setState({ bookUrl: "" })
    this.setState({ bookAction: "" })
  }

  editBooks = () => {
    const url = "https://great-reads-seir1118.herokuapp.com/books/"
    const id = this.state.bookClicked
    fetch(`${url}${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.bookTitle,
          description: this.state.bookDetail,
          coverImgURL: this.state.bookUrl
        })
      }
    ).then(res => res.json()).then(() => this.getBooks())
  }
  // backup
  bookSubmitHandle = (e) => {
    if (this.state.bookUrl.includes("https://") || (this.state.bookUrl.includes("http://"))) {
      const url = `https://great-reads-seir1118.herokuapp.com/books/${this.state.bookAuthor}`
      if (this.state.bookAction === "edit") {
        this.editBooks()
        this.setState({ bookClicked: "" })
      } else if (this.state.bookAction === "create") {
        fetch(url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: this.state.bookTitle,
              description: this.state.bookDetail,
              coverImgURL: this.state.bookUrl,
            })
          }
        ).then((res) => res.json()).then(() => this.getBooks())
      }
      this.setState({ bookAuthor: "" })
      this.setState({ bookTitle: "" })
      this.setState({ bookDetail: "" })
      this.setState({ bookUrl: "" })
      this.setState({ bookAction: "" })
    } else {
      this.setState({ bookUrl: "omg!!!Don't" })
    }

  }
  inputHandle = (e) => {
    const result = e.target.value;
    const where = e.target.attributes.getNamedItem('name').value
    if (where === "author") { this.setState({ bookAuthor: result }) }
    else if (where === "title") { this.setState({ bookTitle: result }) }
    else if (where === "detail") { this.setState({ bookDetail: result }) }
    else if (where === "url") { this.setState({ bookUrl: result }) }
  }
  render() {
    const urlreminder = this.state.bookUrl === "omg!!!Don't" ? "Please type a valid image Url" : ""
    return (
      <div className="App">
        <p className="urlreminder">{urlreminder}</p>
        <BookForm bookTitle={this.bookTitle} bookAction={this.state.bookAction} inputHandle={this.inputHandle} bookSubmitHandle={this.bookSubmitHandle} escHandle={this.escHandle} />
        <Header bookCreateHandle={this.bookCreateHandle} />
        <Switch>
          <Route exact path="/" render={(props) => <Main {...props} books={this.state.books} bookIdHandle={(e) => this.bookIdHandle(e)} delete />} />
          <Route exact path="/author" render={(props) => <Authors {...props} author={this.state.authors} />} />
          <Route exact path="/author/:name" render={(props) => <AuthorDetail {...props} author={this.state.authors} authorCreateHandler={this.authorCreateHandle} />} />
          <Route exact path="/book/:id" render={(props) => <BookDetail {...props} id={this.state.bookClicked} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

