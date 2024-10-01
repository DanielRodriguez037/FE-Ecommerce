import React from 'react';
import logoProvicional from '@assets/img/logo-provisional.png'
import { Footer } from 'flowbite-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const FooterComponent = () => {
	return (
		<Footer container>
			<div className='w-full'>
				<div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
					<div>
						<Footer.Brand href='https://flowbite.com' src={logoProvicional} alt='Flowbite Logo' name='Puro Pelo' />
					</div>
					<div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
						<div>
							<h1>About</h1>
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Flowbite</Footer.Link>
								<Footer.Link href='#'>Tailwind CSS</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<h1>Resources</h1>
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Github</Footer.Link>
								<Footer.Link href='#'>Discord</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<h1>Legal</h1>
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Privacy Policy</Footer.Link>
								<Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className='w-full sm:flex sm:items-center sm:justify-between'>
					<Footer.Copyright href='#' by='Daniel Rodriguez™' year={2024} />
					<div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
						<Footer.Icon href='#' icon={FaFacebook} />
						<Footer.Icon href='#' icon={FaInstagram} />
						<Footer.Icon href='#' icon={FaWhatsapp} />
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default FooterComponent;
