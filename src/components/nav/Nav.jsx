import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')//esto nos lleva a la cima de lapagina
  return (
    <nav>
      <a href="#" onClick={() =>setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      {/* <a href="#video" onClick={() =>setActiveNav('#video')} className={activeNav === '#video' ? 'active' : ''}><RiServiceLine/></a> */}
      <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen/></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav

