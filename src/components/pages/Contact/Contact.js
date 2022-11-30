import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {

const [text, setText] = useState({
  fname: "",
  email: "",
  message: ""
})

const update = (event)=>{
  const value = event.target.value;
  const name = event.target.name;

  setText((preValue)=>{
    return(
      {
        ...preValue,
        [name] : value,
      }
    )
  })
}

  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4> Email </h4>
            <h5> bcs07183077@student.uol.edu.pk </h5>
            <a href='mailto:bcs07183077@student.uol.edu.pk' target="_blank"> Send a message </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4> Messenger </h4>
            <h5> Can Talk </h5>
            <a href='https://m.me/ernest.achiever' target="_blank"> Send a message </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4> Whatsapp </h4>
            <h5> +92 302 0662 962 </h5>
            <a href='https://api.whatsapp.com/send?phone=+923020662962' target="_blank"> Send a message </a>
          </article>
        </div>


        <form action=''>
          <input type="text" value={text.fname} name='fname' placeholder='Enter Your Full Name' required onChange={update} />
          <input type="email" value={text.email} name='email' placeholder='Enter Your Email' required onChange={update} />
          <textarea value={text.message} name='message' rows="7" placeholder='Your Message' required onChange={update} ></textarea>
          <button type='submit' className='btn btn-primary'> Send a Message </button> 
        </form>
      </div>

    </section>
  )
}

export default Contact