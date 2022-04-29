import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/lucia.jpg'
import AVTR2 from '../../assets/albarojpg.jpg'
import AVTR3 from '../../assets/martina.jpg'
import AVTR4 from '../../assets/luis.jpg'
import AVTR5 from '../../assets/valentina.jpg'
import AVTR6 from '../../assets/ariel.jpg'
import AVTR7 from '../../assets/juan.jpg'
import AVTR8 from '../../assets/nicolas.jpg'
import AVTR9 from '../../assets/andres.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR9,
    name: 'Andres Paura',
    review: 'Sebastian es un excelente profecional y mejor persona. gratos años compatidos trabajando codo a codo. Gracias por todo lo que me enseñaste.'
  },
  {
    avatar: AVTR1,
    name: 'Lucía Ycardo',
    review:' Tuve la oportunidad de trabajar con Sebastián, quien ha demostrado su capacidad para llevar adelante proyectos con resultados exitosos. Considero que es un profesional comprometido, resolutivo y versátil, ya que se adapta rápidamente a los cambios y siempre busca la mejora continua en cada una de las tareas que lleva adelante. Destacaría sus ganas de seguir creciendo y formándose profesionalmente Además, es un excelente compañero y siempre está dispuesto a colaborar con una actitud positiva. Estoy segura que aquellos que tengan la posibilidad de trabajar con Sebastián, no se arrepentirán de tenerlo en su equipo.'
  },
  {
    avatar: AVTR7,
    name: 'Juan Pablo Etchegno',
    review: 'Excelente persona y muy profesional. Dedicado y entusiasta. Sebastian es de estas personas que siempre queres tener en tu equipo por ser super agradable como también por ser muy inteligente e intuitivo.'
  },
  {
    avatar: AVTR8,
    name: 'Nicolas Verdiell',
    review: 'Sebastián es un excelente profesional. Responsable, orientado a objetivos y siempre cumpliendo con lo pactado. Tiene gran capacidad de análisis y se muestra muy seguro al momento de tomar decisiones. Además de ser una gran persona, trabaja de manera comprometida, en equipo y enfocado en lograr la excelencia.'
  },
  {
    avatar: AVTR6,
    name: 'Ariel Aguirre',
    review: 'Tuve el gusto de trabajar con Sebastian, siendo el usuario experto en el Area de Postventa, que colaboró conmigo para el desarrollo de software. Quiero destacar las grandes habilidades de comunicación, gestión y liderazgo que posee. Siempre es agradable trabajar con gente tan comprometida y responsable.'
  },
  {
    avatar: AVTR2,
    name: 'Albaro Palacios',
    review: 'Tuve la suerte de coincidir con Seba a mitad de mi cursado para ser Web Developer, y es un compañero y amigo que ha marcado una diferencia en nuestro grupo de estudio. Posee una predisposición para ayudar a los demás que junto a su experiencia en muchos rubros y aspectos de la vida lo convierten en un compañero muy querido por todos. Sabe muy bien como administrar sus tiempos lo que le da una eficiencia muy buena en todo momento, nunca esta por detrás de nadie y hasta por momentos parece entender mas que el resto, se nota a simple vista que su objetivo es auto superarse constantemente, pero sin dejar atrás a nadie. Sin lugar a dudas es alguien a quien tendría en cuenta para dirigir proyectos grandes en un futuro, tiene el carácter y la personalidad perfectas para hacerlo. Gran calidad de persona!'
  },
  {
    avatar: AVTR3,
    name: 'Martina Ortiz Novero',
    review: 'Se puede decir de Sebastián que es una persona que realmente tiene desarrolladas las habilidades blandas, tanto para el trabajo en equipo, como para empatizar, comunicarse y saber explicar de un modo diferente todo aquello que no se logre entender. Destaco también su constancia y capacidad resolutiva a la hora de trabajar.'
  },
  {
    avatar: AVTR4,
    name: 'Luis Alfredo Lescano',
    review: 'Haber trabajado con Sebastián fue enriquecedor en todos los sentidos, tanto por su capacidad para aportar soluciones y conocimientos técnicos al proyecto, como sus habilidades para expresar con claridad sus ideas y motivar constantemente al equipo a mejorar continuamente. Es evidente que cualquiera sea la rama de la programación en la que trabaje siempre aportará calidez humana al grupo y soluciones de gran calidad a cualquier desafío que se presente.'
  },
  {
    avatar: AVTR5,
    name: 'Valentina Avendaño',
    review: 'Seba siempre esta dispuesto a ayudar y a dar su opinion respecto a las actividades de cada dia, tiene mucha proyección y es un gran aporte para el equipo. Es un placer trabajar y codear con el.'
  },


]

const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Review de compañeros</h5>
      <h2>Testimonios de LinkedIn</h2>

      <Swiper className="container testimonial__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}            
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonials">
              <div className="coworker__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <small className='coworker__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials