import React from "react"
import { Link } from 'react-router-dom'
import "./header.css"

export const Header = (props) => {
  return (
    <div className='header'>
      <Link to='/' className="logolink"
        onClick={() => props.homeFetchingStorage()}
      >
        <h1><span className="one">Gr</span><span className="two">ea</span><span className="one">t</span>
          <span className="two">R</span><span className="one">ea</span><span className="two">ds</span>
        </h1>
      </Link>
      <section className="headerright">
        <Link to='/author' className="authorlink">
          <h2>Authors</h2>
        </Link >
        <small>|</small>
        <h2 className="createbooklink" onClick={() => props.bookCreateHandle()}>Create Books</h2>
        <small>|</small>
        <Link to='/saved' className="authorlink">
          <h2>Saved</h2>
        </Link >
      </section>
    </div>
  )
}

export default Header