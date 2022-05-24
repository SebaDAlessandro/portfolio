import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/foto-TabCtrol-PowerBI.png'
import IMG2 from '../../assets/foto-SAP-BreakingBad.png'
import IMG3 from '../../assets/Foto-SPA-Pokemon.png'
import IMG4 from '../../assets/Foto-challengePage.png'
import IMG5 from '../../assets/2do-challenge-Alura.png'

/*=========== DO NOT USE THE IMAGE IN PRODUCTION =============*/

const data =[
  {
    id:1,
    image: IMG1,
    title: 'Power BI - Tablero de control',
    github: 'https://github.com/SebaDAlessandro',
    demo: 'https://youtu.be/COvIFUAva3Y'
  },
  {
    id:2,
    image: IMG2,
    title: 'SPA - Breaking Bad',
    github: 'https://github.com/SebaDAlessandro/m2-breakingbad',
    demo: 'https://youtu.be/nrHBFWm6-o8'
  },
  {
    id:3,
    image: IMG3,
    title: 'SPA - Pokemon',
    github: 'https://github.com/SebaDAlessandro/PI-Pokemon',
    demo: 'https://youtu.be/LEXLZZCfc4I'
  },
  {
    id:4,
    image: IMG4,
    title: 'Challenge - Oracle Alura Latam (encriptador)',
    github: 'https://github.com/SebaDAlessandro/Alura-Challenge',
    demo: 'https://lnkd.in/dbxnBiW7'
  },
  {
    id:5,
    image: IMG5,
    title: '2do Challenge - Oracle Alura Latam (ahorcado)',
    github: 'https://github.com/SebaDAlessandro/ahorcado_alura',
    demo: 'https://sebadalessandro.github.io/ahorcado_alura/'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Trabajos Recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__items-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="porfolio__items-cta">
                <a href={github} className= 'btn' target="_blank">GitHub</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

