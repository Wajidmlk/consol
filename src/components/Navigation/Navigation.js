import React from 'react';
import './Navigation.css';
import './Docked.css';
import Menu from './menu.webp';
import CloseX from './x.png';
import {Link} from 'react-scroll';


	
const DockedMenuFunction = async(B)=>{
	var MenuDocked = document.getElementById('DockedMenu').style;
	if(B==='block'){
		MenuDocked.animation='DMenub 3s 1';
		MenuDocked.display=B;
	}else{
		MenuDocked.animation='DMenubAfter 3s 1';
		fetch(null)
		.then(await setTimeout(()=>{MenuDocked.display=B},3000));
	}
}
	

const Navigation =()=>{
const DivProp = 'navBarInside no-underline dn dib-ns pv4 ph4 grow pointer';

const MenuDivProp = 'MenuBarInside no-underline pv1 grow pointer';

    		
	return(
		<>
				<div className='navBar'>
			<a href='consol.com' ><div className='navBarInside fl Logo'></div></a>
			
			<div className='NavList tc'>
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

				<div WhatsappBtn
				className='navBarInside WhatsappBtn f5 ph2 fr dib'>
					<Link to='cc' spy={true} smooth={true}>WHATSAPP</Link>
				</div>
					
			</div>
			<img 
				onClick={()=>DockedMenuFunction('block')}			
				src={Menu} 
				id='MenuBtn'
				className='MenuBtn fr' 
			/>
				
		</div>	
			<div id='DockedMenu' className='DockedMenu'>
				<img 
				onClick={()=>DockedMenuFunction('none')}
				src={CloseX} className='XBtn fr' />

				<div className='DockedList'>
					<div className={MenuDivProp}>
						<Link activeClass='active' to='Home' spy={true} smooth={true}>HOME</Link>
					</div>


					<div className={MenuDivProp}>
						<Link to='service' spy={true} smooth={true}>OUR SERVICES</Link>
					</div>	

					<div className={MenuDivProp}>
							<Link  to='polices' spy={true} smooth={true}>POLICES</Link>
				</div>


					<div className={MenuDivProp}>
						<Link to='cc' spy={true} smooth={true}>GALLLARY</Link>
					</div>

					<div className={MenuDivProp}>
						<Link to='contact' spy={true} smooth={true}>CONTACT</Link>
					</div>
				</div>
					
			</div>		
		</>

	);
}
export default Navigation;