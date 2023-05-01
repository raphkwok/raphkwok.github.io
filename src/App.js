import React from 'react'

import {Hero, GameJams, Hackathons, Contact } from './containers'
import {Navbar, RoundedEdge} from './components'
import './App.css'

const app = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <GameJams />
      <RoundedEdge />
      <Hackathons />
      <Contact />
    </div>
  )
}

export default app
