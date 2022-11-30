import React from 'react';
import ME from "../../images/me-about.jpg";
import data from './CardApi';
import Cards from './Cards';

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            
            {
              data.map((curElm,index)=>{
                return(
                  <>
                  <Cards five={curElm.five} small={curElm.small} icon={curElm.icon} />       
                  </>
                )
              })
            }
            
          </div>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae magna tempor metus lobortis ornare. Donec feugiat mauris sagittis libero tristique iaculis.  Cras tempus egestas mauris nec hendrerit. Etiam ultrices sed massa ut egestas. </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>

    </section>
  )
}

export default About