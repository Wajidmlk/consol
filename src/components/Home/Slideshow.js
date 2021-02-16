import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from './pics/1.jpg';
import pic2 from './pics/2.jpg';
import pic3 from './pics/3.jpg';

import './Home.css';
import './HomeAnimations.css';

const fadeImages = [
  pic1,
  pic2,
  pic3
];

const Slideshow = () => {
  const classN='container-AnimationIN ';
  const classN2='container2-AnimationIN ';
  const classN3='container3-AnimationIN ';

  const duration={
    duration:8000
  }
  return (
    <div className="slide-container">
      <Fade {...duration}>
        <div className="each-fade">
          <div className="data-container">
            <p className='f4 b'>CONSOL ENGNEERING PVT LTD.</p>
            <div className='container-Animation f-headline b yellow flex'>
            <div className={classN}>C</div>
            <div className={classN}>O</div>
            <div className={classN}>M</div>
            <div className={classN}>M</div>
            <div className={classN}>I</div>
            <div className={classN}>T</div>
            <div className={classN}>S</div>
            <div className={classN}>-</div>
            <div className={classN}>T</div>
            <div className={classN}>O</div>
            </div>

            <p className='f3'>GUARANTEEING HIGHLY COMPETATIVE SERVICES ITS CLIENTS</p>
          </div>
          <img className="image-container" alt="imageAlting" src={fadeImages[0]} />
        </div> 

        <div className="each-fade">

          <div className="data-container">
            <p className='f4 b'>CONSOL ENGNEERING PVT LTD.</p>
            <div className='container2-Animation f-headline b yellow flex'>
            <div className={classN2} >W</div>
            <div className={classN2} >C</div>
            <div className={classN2} >R</div>
            <div className={classN2} >K</div>
            <div className={classN2} >I</div>
            <div className={classN2} >N</div>
            <div className={classN2} >G</div>
            <div className={classN2} >-</div>
            <div className={classN2} >O</div>
            <div className={classN2} >K</div>
            </div>

            <p className='f3'>GUARANTEEING HIGHLY COMPETATIVE SERVICES ITS CLIENTS</p>
          </div>
          <img className="image-container" alt="imageAlting" src={fadeImages[1]} />
        </div>

        <div className="each-fade">

          <div className="data-container">
            <p className='f4 b'>CONSOL ENGNEERING PVT LTD.</p>
            <div className='container3-Animation f-headline b yellow flex'>
            <div className={classN3} >W</div>
            <div className={classN3} >C</div>
            <div className={classN3} >R</div>
            <div className={classN3} >K</div>
            <div className={classN3} >I</div>
            <div className={classN3} >N</div>
            <div className={classN3} >G</div>
            <div className={classN3} >-</div>
            <div className={classN3} >O</div>
            <div className={classN3} >K</div>
            </div>

            <p className='f3'>GUARANTEEING HIGHLY COMPETATIVE SERVICES ITS CLIENTS</p>
          </div>
          <img className="image-container" alt="imageAlting" src={fadeImages[2]} />
        </div>

        
      </Fade>
    </div>
  )
}
export default Slideshow;