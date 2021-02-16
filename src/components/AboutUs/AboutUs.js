import React from 'react';
import './aboutus.css';
import ContactPic from './pics/pic1.png';
import fieldPic from './pics/field.webp';
const AboutUs =()=>{
	return(
	<div id='polices' className='AboutUsMain'>
		
		<div className='aboutUs tc'>	

			<div className='aboutUsIN'>
				<div className='aboutUsInBox'>
					<img alt='contact information' src={ContactPic}/>
				</div>
				<div className='aboutUsInBox ConsolText'>
					<p className='tl pv2'>WHO WE ARE</p>
					<p className='tl f2'>CONSOL Engineering Pvt Ltd.</p>
					<br/><br/>
					<p className='ConsolParah'>Consol’s target is to be become a world-class construction company with brand as forerunner management as base, Personnel as core, Renovation as power, mechanism as guarantee, information as breakthrough and culture as guide. Consol is proud that with the blessings of almighty Allah, Consol is moving fast towards their splendid future with their intelligence, courage and honesty.</p>
					<br/><br/>
					<p className='ConsolParah'>Consol as established since then, the company has become successful and motivated for excellence in oil &amp; chemicals &amp; petro-chemical, power, cement, fertilizer and infrastructure sector. However, even before the establishment of “Consol”, the founders of the company have been involved in equipment installation, Fabrication, Erection of piping network, tanks and Steel structure work activities for the last two decades.</p>					
				</div>
			</div>

			<div className='aboutUsIN'>
				<div className='aboutUsInBox ConsolText'>
					<p className='Headings b'>OUR BELIEVES</p>
					<br/>
					<p className='f3 '>We Believe that Engineering have Solution of Every Problem.</p>
					<br/><br/>
					<a  
					href='localhost:3000'
					className='grow f3 orange link ba ph3 br2 b pv2 mb2 dib  pointer'>
						Contact Us
					</a>

				</div>
				<div className='aboutUsInBox'>
					<img alt='field information' src={fieldPic}/>
				</div>
			</div>
		</div>
	</div>
	);
}
export default AboutUs;