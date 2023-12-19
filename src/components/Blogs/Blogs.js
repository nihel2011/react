import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Blogs() {
  return (
    <div>
    Blogs
    <nav>
        <Link to="/blogs/allblogs">All blogs</Link>
        <Link to="/blogs/allblogs/:id">One blogs</Link>
        {/* <Link to="/blogs/editblog">Edit blog</Link> */}
      </nav>
      <Outlet />
   

    </div>
  )
}

export default Blogs