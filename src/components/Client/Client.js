import React from 'react';
import './Client.css'
import ClientSlide from './ClientSlide';
const Client =()=>{
	return(
		<div id='HERE' className='ClientMain'>
			<p className='Headings f2 b'>Our Clients</p>
			<ClientSlide />
		</div>
		);
}
export default Client;