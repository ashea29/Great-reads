import React from "react"
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1>Great Books</h1>
      </Link>
      <Link to='/author' style={{ textDecoration: 'none', color: 'black' }}>
        <h2>Authors</h2>
      </Link>
      <h2>Create Books</h2>
    </div>
  )
}

export default Header