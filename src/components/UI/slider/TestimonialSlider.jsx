import React from 'react'
import Slider from 'react-slick'

import ava01 from '../../../assets/images/ava-4.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-1.jpg'

import '../../../styles/slider.scss'

const TestimonialSlider = () => {

  const setting = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...setting}>
      <div>
        <p className='review__text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad corporis sunt amet praesentium laudantium reiciendis quam quasi commodi facilis voluptatem.
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className='w-25 rounded'/>
          <h6>Rin</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quam rerum aliquam, consectetur eos minima molestias vel enim. Est, atque.
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava02} alt='avatar' className='w-25 rounded'/>
          <h6>Rae</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus ab nobis ex laboriosam unde temporibus aut esse, hic libero!
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava03} alt='avatar' className='w-25 rounded '/>
          <h6>Riven</h6>
        </div>
      </div>
    </Slider>
  )
}

export default TestimonialSlider
