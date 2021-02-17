import React from 'react';
import './aboutusform.css';

import CloseX from './pics/x.png';
	
const AboutUsForm =({onButtonPressed})=>{

const ClosingAnimation = async()=>{
		document.getElementById('messageForm').style.animation='EClose 3s 1';
		fetch(null)
		.then(await setTimeout(()=>{onButtonPressed(false)},3000));}



	return(
	<div id='messageForm' className='AboutUsFormMain'>
			<form className='formbox shadow-5'>
			<img 
				onClick={()=>ClosingAnimation()}
				src={CloseX} className='XFormBtn fr' />
				<br/><br/>
				<div className="field" tabindex="1">
					<label className="labels">
						Your Name
					</label>
					<br/><br/>
					<input className="fieldinput" name="username" type="text" placeholder="e.g. john doe" />
				</div>
				<br/>
				<div className="field" tabindex="2">
					<label className="labels">
					Your Email
					</label>
					<br/><br/>
					<input className="fieldinput" name="email" type="text" placeholder="email@domain.com" />
				</div>
				<br/>
				<div className="field" tabindex="3">
					<label className="labels">
					Your Message
					</label>
					<br/><br/>
					<textarea className="fieldinput h4" name="message" placeholder="type here"></textarea>
				</div>
					<br/>
				<button 
					onClick={()=>ClosingAnimation()} 
					className="fieldinput pa2 bg-orange b dib br3 hover-bg-yellow grow" 
					type="reset">
						Send Me Message
				</button>
				
			</form>
		</div>
	);
}
export default AboutUsForm;