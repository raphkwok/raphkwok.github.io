import React from 'react'

import { Header, Hero, GameJams, Hackathons, Contact } from './containers'
import { Navbar } from './components'
import './App.css'

const app = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <GameJams />
      <Hackathons />
      <Contact />
    </div>
  )
}

export default app
