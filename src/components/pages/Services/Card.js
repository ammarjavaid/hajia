import React from 'react'
import { BiCheck } from "react-icons/bi";

const Card = (props) => {
    return (
        <>
            <article className='service'>
                <div className='service-head'>
                    <h3> {props.head} </h3>
                </div>

                <ul className='service__list'>
                    <li>
                    <p className="service__list-icon"> {props.icon} </p>
                    <p> {props.one} </p>
                    </li>
                   <li>
                   <p className="service__list-icon"> {props.icon} </p>
                    <p> {props.two} </p>
                   </li>
                    <li>
                    <p className="service__list-icon"> {props.icon} </p>
                    <p> {props.three} </p>
                    </li>
                    <li>
                    <p className="service__list-icon"> {props.icon} </p>
                    <p> {props.four} </p>
                    </li>
                    <li>
                    <p className="service__list-icon"> {props.icon} </p>
                    <p> {props.five} </p>
                    </li>
                    <li>
                    <p className="service__list-icon"> {props.icon} </p>
                    <p> {props.six} </p>
                    </li>
                    {/* <li>
                    <BiCheck />
                    <p> {props.seven} </p>
                    </li> */}
                </ul>
            </article>
        </>
    )
}

export default Card