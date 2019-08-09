import React from 'react';
import '../App.css';
import Img from '../img/img_cover_1.jpg';
import Img2 from '../img/img_cover_2.jpg';
import Carousel from 'react-bootstrap/Carousel';

const cover = () =>{
  return(
      <Carousel>
            <Carousel.Item>
                      <img src={Img} alt="photo1" className="i1"/>
                      <Carousel.Caption className="hh1">
                            <h1>Buy Clothes</h1>
                             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item>
                        <img src={Img2} alt="photo2" className="i1" />
                        <Carousel.Caption className="hh1">
                            <h1>Shopping Made Easy</h1>
                             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
              </Carousel.Item>
      </Carousel>
  )
}

export default cover;