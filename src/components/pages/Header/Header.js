import React from 'react';
import CV from "../../images/amar.docx";
import ME from "../../images/me.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const Header = () => {
  return (
    <>
        <header>
            <div className='container header__container'>
                <h5> Hello I'm </h5>
                <h1> Ammar Javaid </h1>
                <h5 className='text-light'> Frontend Developer </h5>
                
                 
                <div className='cta'>
                    <a href={CV} download className='btn'> Download CV </a>
                    <a href='#contact' className='btn btn-primary' > Let's Talk </a>
                </div>

                <div className='header__socials'>
                    <a href='https://linkedin.com' target="_blank"> <BsLinkedin/> </a>
                    <a href='https://github.com' target="_blank"> <BsGithub /> </a>
                    <a href='https://dribble.com' target="_blank"> <BsDribbble /> </a>
                </div>

                <div className='me'>
                    <img src={ME} alt="me" />
                </div>
                
                <a href='#contact' className='scroll__down'> Scroll Down </a>

            </div>
        </header>
    </>
  )
}

export default Header