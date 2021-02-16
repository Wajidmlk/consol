import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import'./Client.css';

import pic1 from './pics/1.jpg';
import pic2 from './pics/2.png';
import pic3 from './pics/3.png';
import pic4 from './pics/4.png';
import pic5 from './pics/5.png';
import pic6 from './pics/6.png';
import pic7 from './pics/7.png';
import pic8 from './pics/8.png';

const ClientSlide = () => {
const fadeImages = [
  pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8
];

  const fadeProperties = {
    duration: 2000,
    canSwipe: true,
    arrows:false
  };

  return (
    <div className='Slider'>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          <div className="each-fade">
            <div className='ImgBox'>
              <img className='ClientImg' alt='1' src={fadeImages[0]} />
              <img className='ClientImg' alt='2' src={fadeImages[1]} />
              <img className='ClientImg' alt='3' src={fadeImages[2]} />
              <img className='ClientImg' alt='4' src={fadeImages[3]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className='ClientImg' alt='4' src={fadeImages[4]} />
              <img className='ClientImg' alt='3' src={fadeImages[5]} />
              <img className='ClientImg' alt='2' src={fadeImages[6]} />
              <img className='ClientImg' alt='1' src={fadeImages[7]} />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ClientSlide;