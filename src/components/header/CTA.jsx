import React from 'react'
import CV from '../../assets/CV Sebastián D`Alessandro.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a> 
      <a href="#contact" className="btn btn-primary">contact me!</a>
    </div>
  )
}

export default CTA
