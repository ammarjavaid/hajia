import React from 'react'
import data from './CardApi'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <Swiper className='container testi__container' 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {
          data.map((curElm) => {
            return (
              <>

                <SwiperSlide className='testi'>
                  <div className='client__avatar'>
                    <img src={curElm.img} alt='avatar' />
                  </div>
                  <h5 className='client__name'> {curElm.five} </h5>
                  <small className='client__review'>
                    {curElm.review}
                  </small>
                </SwiperSlide>

              </>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials