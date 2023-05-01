import React from 'react'

import './Hackathons.css'
import FadeImage from '../../components/FadeImage/FadeImage'
import images from '../../constants/images.js'

const Hackathons = () => {
  const hackathonImages = [images.htn, images.uofthacks]
  
  return (
    <div className='app__hackathons'>
      <div className='app__hackathons-gradient'></div>
      <div className='app__hackathons-title'>Hackathons</div>
      <div className='app__hackathons-image_htn'>
        <FadeImage image={hackathonImages[0]} imageName='Hack The North'/>
      </div>
      <div className='app__hackathons-image_utx'>
        <FadeImage image={hackathonImages[1]} imageName='UofT Hacks X'/>
      </div>
      <div className='app__hackathons-divider'></div>
    </div>
  )
}

export default Hackathons
