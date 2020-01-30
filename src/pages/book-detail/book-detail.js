import React, { Component } from "react"
import "./book-detail.css"

class BookDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: {},
      savedBookId: []
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id
    const url = `https://great-reads-seir1118.herokuapp.com/books/${id}`
    fetch(url).then(res => res.json()).then(res => this.setState({ book: res }))
  }

  render() {

    // Note: author details may be undefined as the data is coming
    // back from the db.  Handle this condition.
    let authName;
    if (this.state.book.author === undefined) {
      authName = ""
    } else {
      authName = <h3>{this.state.book.author.name}</h3>
    }

    return (
      <div>
        <article className="bookdetailholder">
          <section className="bookdetailimageholder">
            <div className="bookdetailimage" style={{ backgroundImage: `url(${this.state.book.coverImgURL})` }} >
              <button className="bookidsave"
                onClick={e => this.props.bookIdSaveHandle(e)}
                savedId={this.state.book._id}
                savedTitle={this.state.book.title}
                savedUrl={this.state.book.coverImgURL}
                savedAuthor={this.state.book.author ? this.state.book.author.name : ""}
              // savedBook={authName} => {Object Object}
              // savedBook={this.state.book} => Cannot use {Object Object}
              //savedBook={this.state.book.title} => works
              >Save</button>
            </div>
          </section>
          <section className="bookdetail">
            <h2>{this.state.book.title}</h2>
            {authName}
            <p>{this.state.book.description}</p>
          </section>
        </article>
      </div>
    )
  }
}

export default BookDetail