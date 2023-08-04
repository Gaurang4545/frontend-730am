import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import slider from '../image/slider.png'

const Home = () => {
  return (
    <>
    <div className='top_banner'>
      <div className='container-fluid'>
      <div className='detail'>
        <h2>The Best Note Book Collection 2023</h2>
          <Link to='/product'>Shop Now <BsArrowRight/></Link>
      </div>
      <div className='img_box'>
        <img src={slider} className='img-fluid' alt='slider_img'  />
      </div>
      </div>
    </div>
    </>
  )
}

export default Home