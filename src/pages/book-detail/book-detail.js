import React, { Component } from "react"

class BookDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: {}
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id
    const url = `https://great-reads-seir1118.herokuapp.com/books/${id}`
    fetch(url).then(res => res.json()).then(res => this.setState({ book: res }))
  }
  render() {
    return (
      <div>
        <article>
          <section className="bookdetail">
            <h2>{this.state.book.title}</h2>
            <h3>{this.state.book.author.name}</h3>
          </section>

          <section className="bookdetailimageholder">
            <div className="bookdetailimage" style={{ backgroundImage: `url(${this.state.book.coverImgURL})` }} />
          </section>
        </article>
        <article>
          <p>{this.state.book.description}</p>
        </article>
      </div>
    )
  }
}

export default BookDetail