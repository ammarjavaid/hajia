import React from 'react'
import Card from './Card'
import data from './CardApi'

const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer </h5>
      <h2> Services </h2>

      <div className='container services__container'>
        {
          data.map((curElm,id)=>{
            return(
              <>
                <Card head={curElm.head} icon={curElm.icon} one={curElm.one} two={curElm.two} three={curElm.three} four={curElm.four} five={curElm.five} six={curElm.six} seven={curElm.seven} />
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services