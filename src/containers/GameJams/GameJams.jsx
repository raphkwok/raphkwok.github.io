import React from 'react'

import './GameJams.css'
import images from '../../constants/images.js';

const GameJams = () => {
  
  const galleryImages = [
    images.altair, images.nightdrive, images.hijack, images.office,
    images.diceroll, images.altair
  ]
  
  return (
    <div className='app__gamejam section__padding' id='jams'>
      <div className='app_gamejam-title'>
        <p>Game Jams</p>
      </div>
      <div className='section__divider'></div>
      <div className='app_gamejam-gallery'>
        {galleryImages.map((image, index) => (
          <div className='app_gamejam-image' key={index}>
            <img src={image} alt='gamejam' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameJams
