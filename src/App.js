import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Main from "./pages/main/main"
import Header from "./component/header/header"
import BookDetail from "./pages/book-detail/book-detail"
import BookForm from "./component/bookCreateEdit/bookForm"
import Authors from "./pages/author/author"
import AuthorDetail from "./pages/author-detail/author-detail"
import Saved from "./pages/saved/saved"

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

      savedBookId: [],
      search: ""
    }
  }
  componentDidMount() {
    this.getBooks()
    const fetchId = JSON.parse(localStorage.getItem('savedBookId')) || []
    this.setState({ savedBookId: fetchId })
  }
  getBooks() {
    fetch("https://great-reads-seir1118.herokuapp.com/")
      .then(res => res.json())
      .then(res => this.setState({ books: res }))
  }
  searchHandle = (e) => {
    this.setState({ search: e.target.value })
  }
  bookCreateHandle = () => {
    this.setState({ bookAction: "create" })
  }
  bookIdHandle = (e) => {
    e.preventDefault()
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
        .then(() => this.getBooks())


    }
    this.clearInput()
  }
  clearInput = () => {
    let inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.value = "")
    let bookTextArea = document.querySelector('.bookdetail')
    bookTextArea.value = ""
  }
  emptySearch = () => {
    this.setState({ bookAuthor: "" })
    this.setState({ bookTitle: "" })
    this.setState({ bookDetail: "" })
    this.setState({ bookUrl: "" })
    this.setState({ bookAction: "" })
  }
  escHandle = () => {
    this.emptySearch()
    this.clearInput()
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
    e.preventDefault()
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
      this.emptySearch()
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
  bookIdSaveHandle = (e) => {
    const savedBookId = this.state.savedBookId.concat()
    const idArr = []
    savedBookId.forEach(e => idArr.push(e._id))
    const newId = e.target.attributes.getNamedItem('savedId').value
    const newTitle = e.target.attributes.getNamedItem('savedTitle').value
    const newUrl = e.target.attributes.getNamedItem('savedUrl').value
    const newAuthor = e.target.attributes.getNamedItem('savedAuthor').value
    const newBook = {
      _id: newId,
      title: newTitle,
      coverImgURL: newUrl,
      author: newAuthor
    }
    if (!idArr.includes(newBook._id)) {
      savedBookId.push(newBook)
    }
    this.setState({ savedBookId })
    localStorage.setItem('savedBookId', JSON.stringify(savedBookId))
  }
  removeHandle = (e) => {
    const newFetchId = this.state.savedBookId.concat()
    const removedIndex = e.target.attributes.getNamedItem('index').value
    newFetchId.splice(removedIndex, 1)
    localStorage.setItem('savedBookId', JSON.stringify(newFetchId))
    this.setState({ savedBookId: newFetchId })
  }
  // homeFetchingStorage = () => {
  //   const fetchId = JSON.parse(localStorage.getItem('savedBookId')) || []
  //   this.setState({ savedBookId: fetchId })
  // }
  render() {
    const urlreminder = this.state.bookUrl === "omg!!!Don't" ? "Please type a valid image Url" : ""
    const { search, books } = this.state
    const searchedBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="App">
        <p className={urlreminder ? "urlreminder" : "none"}>{urlreminder}</p>
        <BookForm bookTitle={this.bookTitle} bookAction={this.state.bookAction} inputHandle={this.inputHandle} bookSubmitHandle={this.bookSubmitHandle} escHandle={this.escHandle} />
        <Header bookCreateHandle={this.bookCreateHandle} />
        <Switch>
          <Route exact path="/" render={(props) => <Main {...props} search={this.state.search} searchHandle={e => this.searchHandle(e)} books={searchedBooks} bookIdHandle={(e) => this.bookIdHandle(e)} />} />
          <Route exact path="/author" render={(props) => <Authors {...props} author={this.state.authors} />} />
          <Route path="/author/:name" render={(props) => <AuthorDetail {...props} author={this.state.authors} authorCreateHandler={this.authorCreateHandle} />} />
          <Route path="/book/:id" render={(props) => <BookDetail {...props} id={this.state.bookClicked} bookIdSaveHandle={e => this.bookIdSaveHandle(e)} />} />
          <Route exact path="/saved" render={(props) => <Saved {...props} savedBookId={this.state.savedBookId} removeHandle={e => this.removeHandle(e)} bookIdHandle={e => this.bookIdHandle(e)} book />} savedBookId={this.state.savedBookId} />
        </Switch>
      </div>
    );
  }
}

export default App;

