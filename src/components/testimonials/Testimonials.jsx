import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Abril.jpg'
import AVTR2 from '../../assets/FaceFrontHappy.jpg'
import AVTR3 from '../../assets/FaceFrontBW.jpeg'
import AVTR4 from '../../assets/FaceFronRed.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Abril DAlessandro',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rerum, aliquam earum dolor fuga voluptates necessitatibus perferendis porro suscipit blanditiis qui sint nulla magni ratione nam eius voluptatum, ipsa sapiente?'
  },
  {
    avatar: AVTR2,
    name: 'Seba Happy',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rerum, aliquam earum dolor fuga voluptates necessitatibus perferendis porro suscipit blanditiis qui sint nulla magni ratione nam eius voluptatum, ipsa sapiente?'
  },
  {
    avatar: AVTR3,
    name: 'Seba BW',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rerum, aliquam earum dolor fuga voluptates necessitatibus perferendis porro suscipit blanditiis qui sint nulla magni ratione nam eius voluptatum, ipsa sapiente?'
  },
  {
    avatar: AVTR4,
    name: 'Sebastian DAlessandro',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rerum, aliquam earum dolor fuga voluptates necessitatibus perferendis porro suscipit blanditiis qui sint nulla magni ratione nam eius voluptatum, ipsa sapiente?'
  },
]

const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Review from coworker</h5>
      <h2>Testimonials</h2>

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

// 2:31hs https://www.youtube.com/watch?v=G-Cr00UYokU&list=RDCMUCL8l_VxCAN0jOpaLaRAm8sQ&index=5