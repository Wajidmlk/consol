import React from 'react';
import './Navigation.css';
import {Link} from 'react-scroll';
const Navigation =({onButtonSubmit})=>{
const DivProp = 'navBarInside no-underline dn dib-ns pv4 ph4 grow pointer';


	return(
		<div className='navBar'>

    		<a href='consol.com' onClick={()=>onButtonSubmit('s')} ><div className='navBarInside fl Logo'></div></a>
			<div className={DivProp}>
				<Link activeClass='active' to='Home' spy={true} smooth={true}>HOME</Link>
			</div>


			<div className={DivProp}>
				<Link to='service' spy={true} smooth={true}>OUR SERVICES</Link>
			</div>


			<div className={DivProp}>
				<Link  to='polices' spy={true} smooth={true}>POLICES</Link>
			</div>


			<div className={DivProp}>
				<Link to='cc' spy={true} smooth={true}>GALLLARY</Link>
			</div>

			<div className={DivProp}>
				<Link to='contact' spy={true} smooth={true}>CONTACT</Link>
			</div>

			<div 
			className='navBarInside WhatsappBtn f5 ph3 fr dib'>
				<Link to='cc' spy={true} smooth={true}>WHATSAPP</Link>
			</div>





		</div>
	);
}
export default Navigation;