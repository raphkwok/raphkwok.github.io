import React from 'react'
import { useState } from 'react';

import './GameJams.css'
import images from '../../constants/images.js';

function GameJams() {
  
  const galleryImages = [
    images.deimos, images.nightdrive, images.hijack, images.office,
    images.diceroll, images.altair
  ]

  // Track Movement

  const [mouseDown, setMouseDown] = useState(0);
  const [prevPercent, setPrevPercent] = useState(0);
  const [percent, setPercent] = useState(0);

  // Math variables for Track Measurement
  const rightScrollBound = 30;
  const leftScrollBound = -100;
  const parallaxPercent = 100 / (rightScrollBound - leftScrollBound);
  

  function handleMouseMove(e) {
    if (mouseDown === 0) return;

    const delta = mouseDown - e.clientX,
          track = window.innerWidth / 2;

    const nextPercentUnconstrained = prevPercent + (delta / track) * -100,
          nextPercent = Math.max(Math.min(nextPercentUnconstrained, 30), -100);

    setPercent(nextPercent + 5);
  }
  
  return (
    <div className='app__gamejam section__padding' id='jams'>
      <div className='app_gamejam-title'>
        <p>Game Jams</p>
        <p
          style={{color: 'red'}}
        >{`Down: ${parallaxPercent}. Transform: translate(${percent}%, 0%)`}</p>
      </div>
      <div className='section__divider'></div>
      <div className='app__gamejam-track' 
        onMouseDown={e => setMouseDown(e.clientX)}
        onMouseMove={handleMouseMove}
        onMouseUp={() => {setMouseDown(0); setPrevPercent(percent);}}
        onMouseLeave={() => {setMouseDown(0); setPrevPercent(percent);}}
      >
        <div className='app__gamejam-gallery'
          style={{transform: `translate(${percent}%, 0%)`}}
        >
          {galleryImages.map((image, index) => (
            <div>
              <img src={image} alt={`gamejam_${index}`} draggable='false' key={`gamejam_${index}`}
                style={{objectPosition: `${(percent + 100) * parallaxPercent}% 0%`}}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className='app__gamejam_edge'>
        <div className='app__gamejam_edge-rounded'></div>
      </div>
    </div>
  )
}

export default GameJams
