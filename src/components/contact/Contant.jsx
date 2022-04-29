import React, { useRef } from 'react'
import './contant.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';


const Contant = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sime69g', 'template_ajedc49', form.current, 'xFa04mzHu00vjn8BZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Mantengamos el contacto</h5>
      <h2>¿Hablamos?</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>sebadalessandro@hotmaill.com</h5>
            {/* <a href="mailto:sebadalessandro@hotmail.com" target="_blank">Send a message</a> */}
          </article>
          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>(+54) 9 280 458 3832</h5>
            <a href="http://api.whatsapp.com/send?phone=+5492804583832" target="_blank">Envíe un message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Ingrese su nombre completo" required/>
          <input type="email" name="email" placeholder="Tu Email" required/>
          <textarea name="message" rows="7" placeholder="Tu Message" required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contant

/*
3:18hs https://www.youtube.com/watch?v=G-Cr00UYokU&list=RDCMUCL8l_VxCAN0jOpaLaRAm8sQ&index=6

falta cambiar las rutas de acceso a facebook, intagram, twitter, github, linkedin

en portfolio falta deployar alguno y en el resto agregar el link de github

*/