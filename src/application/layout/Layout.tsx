import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';
import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	return (
		<div className='g-sidenav-show  bg-gray-200'>
			<main className='main-content position-relative max-height-vh-100 h-100 border-radius-lg '>
				<Navbar />
				<div className='container-fluid'>
					<div className='row min-vh-80 h-100'>
						<div className='col-12'>{props.children}</div>
					</div>
				</div>
				<Footer/>
			</main>
		</div>
	);
};

export default Layout;
