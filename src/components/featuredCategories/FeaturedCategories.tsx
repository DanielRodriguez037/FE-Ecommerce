import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import alimento from '@assets/img/alimento.png';
import snacks from '@assets/img/snacks.png';
import accesorios from '@assets/img/accesorios.png';
import higiene from '@assets/img/higiene.png';

const categories = [
	{ name: 'Alimento', href: '#', img: alimento },
	{ name: 'Snacks', href: '#', img: snacks },
	{ name: 'Accesorios', href: '#', img: accesorios },
	{ name: 'Belleza e higiene', href: '#', img: higiene },
];

const FeaturedCategories = () => {
	return (
		<div className='w-[1309px]'>
			<div>
				<span className='flex font-calibri text-2xl items-center gap-2'>
					<FaShoppingBag className='h-6 w-6 flex-none text-puropelo' />
					Categorias destacadas
				</span>
			</div>
			<div className='flex justify-between gap-3 mt-8'>
				{categories.map((category, index) => (
					<a href={category.href} className='text-center' key={index}>
						<div className='flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col max-w-sm p-3 h-96 hover:bg-[#ECCC9F] transition duration-300 hover:scale-110'>
							<div className='h-[250px] w-full'>
								<img className='object-cover h-full w-full transf' src={category.img} alt='' />
							</div>
							<div className='flex h-full flex-col justify-center gap-4 p-6'>
								<h5 className='text-xl font-semibold tracking-tight top-6 text-gray-900 dark:text-white'>
									{category.name}
								</h5>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default FeaturedCategories;
