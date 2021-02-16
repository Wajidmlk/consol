import React from 'react';
import './Footer.css';

const Footer =()=>{
	return(
		<div id='contact'className='FooterMain tc'>
			<div className='Ope'>
			<div className='FooterBox grow tc'>
				<p className='f3'>Do you have a query?<br/>Feel free to Contact<br /><br/>+92 300 100 5570</p>

				<a  
					href='localhost:3000'
					className='grow f3 orange link ba ph3 br2 b pv2 mb2 dib offwhite pointer'>
						Send Us a Message
				</a>

			</div>
			<br />
			<div className='Footer tc'>
			
				<div className='FooterAddressBox'>
					<p className='f4 b'>SADIQABAD OFFICE</p>
					<div className='f6 pt3'>
						PLOT # 20, GULSHAN-E-AZMAT, MAIN KLP ROAD, SADIQABAD, RAHIM YAR KHAN PUNJAB.
						<br /><br />
						068 595 7121
					</div>
				</div>
				<div className='FooterAddressBox'>
					<p className='f5 b'>KARACHI OFFICE</p>
				<div className='f6 pt3'>
					SUITE NUMBER 4, 2ND FLOOR, 14-C, 25TH COMMON STREET, PHASE 5, DHA, CLIFTON KARACHI
					<br /><br />
					0300 100 5570
				</div>
				</div>
				<div className='FooterAddressBox'>
					<p className='f5 b'>GHOTKI OFFICE</p>
					<div className='f6 pt3'>
						MAIN HIGHWAY ROAD NEAAR ADMORE FILLING STATION GHOTKI (65110), SINDH.
						<br /><br />
						0723 668 550
						</div>
					</div>
					<div className='FooterAddressBox'>
						<p className='f5 b'>WARE HOUSE</p>
					<div  className='f6 pt3'>
						MAIN HIGHWAY ROAD NEAAR ADMORE FILLING STATION GHOTKI (65110), SINDH.
					<br /><br />
						0723 668 550
					</div>
				</div>
			</div>
			</div>
			<div className='Signature tc white'>
			<p className=' f6 b'>© 2020 Consol - Construction Solution. All Rights Reserved.</p>
			<div  className=' f6 pt3'>Designed by Wajid Malik</div>
			</div>
		</div>
	);
}
export default Footer;