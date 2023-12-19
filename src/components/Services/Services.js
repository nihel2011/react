import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Services() {
  const location = useLocation()
  console.log(location);
  return (
    <div>
       Services
       <nav>
        <Link to="/services/marketing">Service Marketing</Link>
        <Link to="/services/developpement">Service Developpement</Link>
      </nav>
      <Outlet />
   
    
    </div>
  )
}

export default Services