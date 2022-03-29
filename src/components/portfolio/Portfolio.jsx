import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

/*=========== DO NOT USE THE IMAGE IN PRODUCTION =============*/

const data =[
  {
    id:1,
    image: IMG1,
    title: 'Moneymaker - an NFT Search Engine',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17819862-Moneymaker-an-NFT-Search-Engine'
  },
  {
    id:2,
    image: IMG2,
    title: 'Moneymaker - an NFT Search Engine',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17819862-Moneymaker-an-NFT-Search-Engine'
  },
  {
    id:3,
    image: IMG3,
    title: 'Moneymaker - an NFT Search Engine',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17819862-Moneymaker-an-NFT-Search-Engine'
  },
  {
    id:4,
    image: IMG4,
    title: 'Moneymaker - an NFT Search Engine',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17819862-Moneymaker-an-NFT-Search-Engine'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
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

