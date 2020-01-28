import React, { Component } from "react"

class BookDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: {}
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    const url = `https://great-reads-seir1118.herokuapp.com/books/${id}`
    fetch(url).then(res => res.json()).then(res => this.setState({ book: res }))
  }
  render() {
    return (
      <div>
        <section className>

        </section>
      </div>
    )
  }
}

export default BookDetail