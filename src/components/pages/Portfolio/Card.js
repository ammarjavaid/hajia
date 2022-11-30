import React from 'react'

const Card = (props) => {
  return (
    <>
        <article className='portfolio__item'>
            <div className='portfolio__item-img'>
                <img src={props.img} alt="image" className='portfolio__item-image' />
            </div>

            <h3> {props.title} </h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target="_blank"> {props.btn1} </a>
            <a href='https://dribbble.com' className='btn btn-primary' target="_blank"> {props.btn2} </a>
            </div>
        </article>
    </>
  )
}

export default Card