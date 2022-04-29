import React from 'react'
import './about.css'
import ME from '../../assets/FaceFrontHappy.jpg'
import {FaAward} from 'react-icons/fa'
import {ImBriefcase} from 'react-icons/im'
import {MdFolderSpecial} from 'react-icons/md'

const about = () => {
  return (
    <section id='about'>
      <h5>¿Quién soy?</h5>
      <h2>Sobre mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experiencia</h5>
              <small>16+ años de trabajo</small>
            </article>

            <article className="about__card">
              <ImBriefcase className="about__icon"/>
              <h5>Empresas</h5>
              <small>Nacionales y Multinacionales</small>
            </article>

            <article className="about__card">
              <MdFolderSpecial className="about__icon"/>
              <h5>Proyectos</h5>
              <small>4+ completados</small>
            </article>
          </div>

          <p>
          Soy analista por naturaleza, apasionado por la tecnología, el deporte al aire libre y padre de familia.
          Actualmente me encuentro incursionando como Developer de aplicaciones como Fullstack. Por otra parte y en cuanto a lo laboral, me he desempeñado como Analista Sr y Encargado de Área abarcando procesos de auditorías, coordinador de equipos y líder de proyectos para distintas empresas.
          Me caracterizo por ser una persona organizada, dedicada, responsable y proactiva. Me siento cómodo en ambientes colaborativos dentro del cual se creen espacios de trabajo en donde todo el mundo se sienta bienvenido e incluido.
          Pretendo ser parte del mundo organizacional en donde clientes y proveedores se reconozcan como partners generando alianzas de negocios que fomenten la sustentabilidad para sí y la comunidad en general.
          A nivel personal, tengo el objetivo de seguir creciendo en el mundo TI desarrollándome en los distintos lenguajes de programación que es, en definitiva, lo que más me apasiona.
          </p>

          <a href="#contact" className='btn btn-primary'>¿Hablamos?</a>
        </div>
      </div>
    </section>
  )
}

export default about