import React from 'react'
import { useState, useRef, useEffect } from 'react';

import './FadeImage.css'

function FadeImage({image, imageName}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting))});
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
    }, []);   

  return (
    <div className={`app__fadeImage ${visible ? 'visible' : ''}`} ref={ref}>
      <img src={image} alt={imageName} draggable='false'/>
    </div>
  )
}

export default FadeImage
