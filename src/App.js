import React, { Component } from 'react';
import Main from "./pages/main/main"
import Header from "./component/header/header"
import Author from "./pages/author/author"
import { Link, Route, Switch } from "react-router-dom";
import BookDetail from "./pages/book-detail/book-detail"

import './App.css';
import data from "./seedData.json"
import BookForm from "./component/bookCreateEdit/bookForm"
import Authors from "./pages/author/author"
import DetailAuthor from "./pages/author-detail/author-detail"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: data,
      authors: [],
      bookAction: "create",
      bookClicked: ""
    }
  }
  bookClickHandle = (e) => {
    const singleBook = e.target
    console.log(singleBook)
  }
  escHandle = () => {
    this.setState({ bookAction: "" })
  }
  render() {
    return (
      <div className="App">
        <BookForm bookAction={this.state.bookAction} escHandle={this.escHandle} />
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Main {...props} books={this.state.books} bookClickHandle={(e) => this.bookClickHandle(e)} />} />
          <Route exact path="/book/:name" render={(props) => <BookDetail {...props} name={this.state.name} />} />
          <Route exact path="/author" render={(props) => <Authors {...props} />} />
          <Route exact path="/author/:id" render={(props) => <DetailAuthor {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
