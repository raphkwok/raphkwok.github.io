import React from 'react'
import { useState, useEffect, useRef } from 'react';

import './RoundedEdge.css'

const RoundedEdge = () => {
    const [height, setHeight] = useState(20);
    const ref = useRef(null);
    const [yPos, setYPos] = useState(0); // if height is less than yPos, then it is not visible

    // Div Height Measurements
    const vhPercent = 0.3; // Size of the rounded edge
    const roundSpeed = 0.5; // Speed of the animation

    useEffect(() => {
      const handleScroll = () => {
        setHeight(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);

      setYPos(ref.current.offsetTop - window.innerHeight / 2);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [window.innerHeight]);
  
    return (
    <div className='app__rounded-edge'
      
      ref={ref}
    >
      <div className='app__rounded'
        style={{height: `${Math.min((window.innerHeight * vhPercent - (height - yPos) * roundSpeed), window.innerHeight * vhPercent)}px`}}
      >
        {/* <h1 className='temp__height-counter'>Scroll: {height}, YPos: {yPos}, Height: {(height - yPos)}</h1>
        <h1 className='temp__visible-indicator'>Visible: {yPos}</h1> */}
      </div>
    </div>
  )
}

export default RoundedEdge