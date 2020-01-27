import React, { Component } from 'react';
import Main from "./pages/main/main"
import Header from "./component/header/header"
import Author from "./pages/author/author"
import { Link, Route, Switch } from "react-router-dom";
import BookDetail from "./pages/book-detail/book-detail"

import './App.css';
import data from "./seedData.json"
import BookForm from "./component/bookCreateEdit/bookCreateEdit"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: data,
      authors: [],
      createBook: false,
      bookClicked: ""
    }
  }
  bookClickHandle = (e) => {
    const singleBook = e.target
    console.log(singleBook)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Author />
        <Switch>
          <Route exact path="/" render={(props) => <Main {...props} books={this.state.books} bookClickHandle={(e) => this.bookClickHandle(e)} />} />
          <Route exact path="/bookdetail/:name" render={(props) => <BookDetail {...props} name={this.state.name} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
