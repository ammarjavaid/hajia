import React from 'react'
// import { FaAward } from 'react-icons/fa';

const Cards = (props) => {
    return (
        <>
            <article className='about__card'>
                {/* <FaAward className='about__icon' /> */}
                  <p className='about__icon'> {props.icon} </p>
                <h5> {props.five} </h5>
                <small> {props.small} </small>
            </article>
        </>
    )
}

export default Cards