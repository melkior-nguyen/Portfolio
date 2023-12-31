import React, { useState } from 'react'
import './header.css'
import avatar from '../../assets/avatar.jpg'
import Button from '../Button/Button'
import CV from '../../assets/NGUYENMINHHIEU-FE.pdf'
import logo from '../../assets/logo.png'

import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { GiCat } from 'react-icons/gi'
import { FaCat } from 'react-icons/fa'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'


function Header() {
  const [cat, setCat] = useState(true)


  return (
    <section className='main_section header' id='home'>

      <div className='header_welcome'>
        <span>Hello! I'm a <br/>Front End Developer</span>
        <div className='header_name'>
          <span style={{ '--i': '1' }} className='letter'>N</span>
          <span style={{ '--i': '2' }} className='letter'>G</span>
          <span style={{ '--i': '3' }} className='letter'>U</span>
          <span style={{ '--i': '4' }} className='letter'>Y</span>
          <span style={{ '--i': '5' }} className='letter'>E</span>
          <span style={{ '--i': '6' }} className='letter'>N</span>
          <span> </span>
          <span style={{ '--i': '7' }} className='letter'>M</span>
          <span style={{ '--i': '8' }} className='letter'>I</span>
          <span style={{ '--i': '9' }} className='letter'>N</span>
          <span style={{ '--i': '10' }} className='letter'>H</span>
          <span> </span>
          <span style={{ '--i': '11' }} className='letter'>H</span>
          <span style={{ '--i': '12' }} className='letter'>I</span>
          <span style={{ '--i': '13' }} className='letter'>E</span>
          <span style={{ '--i': '14' }} className='letter'>U</span>
        </div>
        <div className='header_welcome-quote'>
          <div>
            <RiDoubleQuotesL />
          </div>
          What you are doing in your free time will define you!
          <div>
            <RiDoubleQuotesR />
          </div>
        </div>
      </div>

      <div className='header_info'>
        <div className='header_info-avatar'>
          <img src={avatar}></img>
        </div>
        <div className='header_info-button'>
          <Button btnStyle='outline' btnText='Download CV' btnLink={CV} download />
          <Button btnStyle='primary' btnText="Let' Talk" btnLink='#contact' />
        </div>
      </div>

      <div className='header_logo'>
        <img src={logo} />
      </div>

      <div className='header_socials'>
        <a href='https://www.instagram.com/melkior_nguyen/' target='_blank'><AiFillInstagram /></a>
        <a href='https://www.facebook.com/chubanmeo7397/' target='_blank'><BsFacebook /></a>
        <a href='https://github.com/melkior-nguyen' target='_blank'><AiFillGithub /></a>
        <div></div>
      </div>

      {/* Sub */}
      <div className='header_welcome-cat'>
        {cat ? <GiCat onClick={() => setCat(false)} /> : <FaCat onClick={() => setCat(true)} />}
      </div>

      <div className='header_frame'>
        <div></div>
        <div></div>
      </div>

      <div className='header_scrolldown'><a href='#footer'>ScrollDown</a></div>


    </section>
  )
}

export default Header
