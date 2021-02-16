import React from 'react';
import './Client.css'
import ClientSlide from './ClientSlide';
const Client =()=>{
	return(
		<div id='Client' className='ClientMain'>
			<p className='Headings'>Our Clients</p>
			<br/>
			<ClientSlide />
		</div>
		);
}
export default Client;