import { FaTruck } from 'react-icons/fa';
import { Card } from 'flowbite-react';

const InformationBanner = () => {
	return (
		<div className='py-5 px-16 hidden lg:flex justify-center'>
			<Card>
				<div className='mx-3 grid grid-cols-3 justify-between divide-x-2'>
					<div className='p-3'>
						<div className='flex items-center mr-3'>
							<FaTruck aria-hidden='true' className='mr-3 h-5 w-5 flex-none text-text-puropelo' />
							<h2 className='mr-1 font-semibold font-sans text-sm'>Envios y Devoluciones Gratis *</h2>
							<span className='text-gray-400 text-xs'>aplica TyC</span>
						</div>
					</div>
					<div className='p-3'>
						<div className='flex items-center mr-3'>
							<FaTruck aria-hidden='true' className='mr-3 h-5 w-5 flex-none text-text-puropelo' />
							<h2 className='font-semibold font-sans text-sm'>Asesoría en Nutrición y Comportamiento</h2>
						</div>
					</div>
					<div className='p-3'>
						<div className='flex items-center mr-3'>
							<FaTruck aria-hidden='true' className='mr-3 h-5 w-5 flex-none text-text-puropelo' />
							<h2 className='font-semibold font-sans text-sm '>¡Recibe tus productos el mismo dia!*</h2>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default InformationBanner;
