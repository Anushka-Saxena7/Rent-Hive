import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <h2>Rent Hive</h2>
      <ul className='list-nav'>
        <li className='list'><Link to="/home">Home</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>
       
    </div>
    </>
  )
}

export default Navbar