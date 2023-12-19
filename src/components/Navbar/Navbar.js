import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to='/blogs'> Blogs</Link>


    </nav>
  )
}

export default Navbar