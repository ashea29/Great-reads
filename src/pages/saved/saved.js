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
    const fetchId = JSON.parse(localStorage.getItem('savedBookId')) || []
    this.setState({ savedBook: fetchId })
  }
  removeHandle = (e) => {
    const newFetchId = this.state.savedBook.concat()
    const removedIndex = e.target.attributes.getNamedItem('index').value
    newFetchId.splice(removedIndex, 1)
    localStorage.setItem('savedBookId', JSON.stringify(newFetchId))
    this.setState({ savedBook: newFetchId })
  }
  render() {
    return (
      <div className="savedbook">
        <h1>My favourite book(s)</h1>
        <div className="bookdisplay">
          {this.state.savedBook.map((eachBook, i) =>
            <div key={eachBook._id} className="eachbookholder"  >

              <section id={eachBook._id} style={{ backgroundImage: `url(${eachBook.coverImgURL})` }} className="eachbookimage">
                <div onClick={(e) => this.props.bookIdHandle(e)}>
                  <Link to={`/book/${eachBook._id}`}><section id={eachBook._id} className="bookdetailhover">  </section></Link>
                </div>
                <small className="bookdelete" index={i} onClick={e => this.removeHandle(e)}>Remove</small>
              </section>
              <section>
                <Link to={`/book/${eachBook._id}`} className="eachbooktitleholder">
                  <p className="eachbooktitle">{eachBook.title}</p>
                </Link>
                <Link to={`/author/${eachBook.author}`} className="eachbookauthorholder">
                  <p className="eachbookauthor" >{eachBook.author.name}</p>
                </Link>
              </section>
            </div>
          )}
        </div>
      </div >
    )
    // } else {
    //   return (
    //     <div>
    //       <br /> <br /> <br /> <br /> <br /> <br />
    //       <br /> <br /> <br /> <br /> <br /> <br />
    //       <h1> Loading... </h1>
    //     </div>
    //   )
    // }

  }
}

export default Saved