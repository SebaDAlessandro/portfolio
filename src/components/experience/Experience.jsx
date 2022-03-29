import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiSequelize} from 'react-icons/si'
import {SiPostman} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__fronted">
          <h3>Fronted Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
              <AiOutlineGithub className="experience__icons"/>
              <h4>GitHub</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <AiFillHtml5 className="experience__icons"/>
              <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <DiCss3 className="experience__icons"/>
              <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <FaBootstrap className="experience__icons"/>
              <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <SiJavascript className="experience__icons"/>
              <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <FaReact className="experience__icons"/>
              <h4>React</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <SiRedux className="experience__icons"/>
              <h4>Redux</h4>
              </div>
            </article>
            
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
              <FaNodeJs className="experience__icons"/>
              <h4>NodeJs</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <SiExpress className="experience__icons"/>
              <h4>Express</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <SiPostgresql className="experience__icons"/>
              <h4>PostgreSQL</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <SiSequelize className="experience__icons"/>
              <h4>Sequelize</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
              <SiPostman className="experience__icons"/>
              <h4>Postman</h4>
              </div>
            </article>
       
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience