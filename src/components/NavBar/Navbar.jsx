import React from 'react'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h2>RK</h2>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__quicksand'><a href='#jams'>Game Jams</a></li>
        <li className='p__quicksand'><a href='#hackathons'>Hackathons</a></li>
        <li className='p__quicksand'><a href='#contact'>Contact Me</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
