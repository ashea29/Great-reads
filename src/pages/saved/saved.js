import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./saved.css"
import "../book-detail/book-detail.css"

class Saved extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedBook: [],
      deletedBook: ''
    }
  }
  componentDidMount() {
    this.fetchSaved()
  }
  fetchSaved = () => {
    const fetchId = JSON.parse(localStorage.getItem('savedBookId')) || []
    if (fetchId) {
      const savedBook = this.state.savedBook.concat()
      for (let i = 0; i < fetchId.length; i++) {
        let url = `https://great-reads-seir1118.herokuapp.com/books/${fetchId[i]}`
        fetch(url).then(res => res.json())
          .then(each => savedBook.push(each))
      }
      this.setState({ savedBook })
    }
  }
  removeHandle = (e) => {
    const fetchId = JSON.parse(localStorage.getItem('savedBookId')) || []
    const removedIndex = e.target.attributes.getNamedItem('index').value
    const newFetchId = fetchId.concat()
    newFetchId.splice(removedIndex, 1)
    localStorage.setItem('savedBookId', JSON.stringify(newFetchId))
    this.setState({ savedBook: newFetchId })
  }
  render() {
    if (this.state.savedBook[0] && this.state.savedBook[0].author) {
      return (
        <div className="savedbook">
          <h1>My favourite book(s)</h1>
          <div className="bookdisplay">
            {this.state.savedBook.map((eachBook, i) =>
              <div key={eachBook._id} className="eachbookholder"  >

                <section id={eachBook._id} style={{ backgroundImage: `url(${eachBook.coverImgURL})` }} className="eachbookimage">
                  <div>
                    <Link to={`/book/${eachBook._id}`}><section className="bookdetaillinksection" /></Link>
                  </div>
                  <small className="bookdelete" index={i} onClick={e => this.removeHandle(e)}>Remove</small>
                </section>
                <section>
                  <Link to={`/book/${eachBook._id}`} className="eachbooktitleholder">
                    <p className="eachbooktitle">{eachBook.title}</p>
                  </Link>
                  <Link to={`/author/${eachBook.author.name}`} className="eachbookauthorholder">
                    <p className="eachbookauthor" >{eachBook.author.name}</p>
                  </Link>
                </section>
              </div>
            )}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br /> <br />
          <h1> Waiting for book.. </h1>
        </div>
      )
    }

  }
}

export default Saved