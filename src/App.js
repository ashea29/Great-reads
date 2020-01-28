import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios"
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
      authors: [],
      bookAction: "",
      bookClicked: ""
    }
  }
  componentDidMount() {
    this.getBooks()
    this.getAuthor()
  }

  getAuthor () {
    const url = "https://great-reads-seir1118.herokuapp.com/authors";
    axios.get(url).then(res => {
      this.setState({
        authors: res.data,
        authorsBooks: res.data

      });
    });
  }

  getBooks() {
    const url = "https://great-reads-seir1118.herokuapp.com/"
    axios.get(url).then(res => {
      this.setState({
        books: res.data
      });
    });
  }
  bookCreateHandle = () => {
    this.setState({ bookAction: "create" })
  }
  bookEditHandle = (e) => {
    const editedBook = e.target.attributes.getNamedItem('id').value
    alert(`Edit ${editedBook}`)
    this.setState({ bookAction: "edit" })
  }
  escHandle = () => {
    this.setState({ bookAction: "" })
  }

  render() {
    return (
      <div className="App">
        <BookForm bookAction={this.state.bookAction} escHandle={this.escHandle} />
        <Header bookCreateHandle={this.bookCreateHandle} />
        <Switch>
          <Route exact path="/" render={(props) => <Main {...props} books={this.state.books} bookEditHandle={(e) => this.bookEditHandle(e)} />} />
          <Route exact path="/book/:name" render={(props) => <BookDetail {...props} name={this.state.name} />} />
          <Route exact path="/author" render={(props) => <Authors {...props} author={this.state.authors} />} />
          <Route exact path="/author/:id" render={(props) => <AuthorDetail {...props} author={this.state.authors} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
