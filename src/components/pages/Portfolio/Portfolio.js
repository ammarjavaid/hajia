import React from 'react'
import data from './CardApi'
import Card from './Card'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2> Portfolio </h2>

      <div className='container portfolio__container'>
        {
          data.map((curElm,index)=>{
            return(
              <>
                <Card key={index} img={curElm.img} title={curElm.title} btn1={curElm.btn1} btn2={curElm.btn2} />
              </>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio