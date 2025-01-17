import { IProductDto } from '@domain/products/product.interface';
import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

interface ShopingCardProps {
	product: IProductDto;
	img: string;
	key: number;
}

const ShopingCard: React.FC<ShopingCardProps> = ({ product, img }) => {
	const discountedPrice = (Number(product.price) - Number(product.price) * (Number(product.discount) / 100)).toFixed(0);
	const truncatedName = product.name.length > 17 ? product.name.substring(0, 14) + '...' : product.name;
	return (
		<a href={product.id.toString()} className='text-center' key={product.id}>
			<div className='flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col max-w-sm hover:bg-[#ECCC9F] transition duration-300 hover:scale-110'>
				<div className='max-h-[250px] max-w-[250px] w-full m-auto'>
					<img className='object-cover h-full w-full transf' src={img} alt='' />
				</div>
				<div className='flex h-full flex-col gap-4 p-6'>
					<div className='text-start'>
						<h5 className='text-xl font-semibold tracking-tight top-6 text-gray-900 dark:text-white'>
							{truncatedName}
						</h5>
						<span className='flex'>
							<FaStar className='text-[#f0e334]' />
							<FaStar className='text-[#f0e334]' />
							<FaStar className='text-[#f0e334]' />
							<FaStar className='text-[#f0e334]' />
							<FaStar className='text-[#d1d1cf]' />
						</span>
					</div>
					<div className='flex flex-row justify-between items-end content-start'>
						<div className='flex flex-col content-start'>
							<div className='flex gap-3'>
								<p className='line-through m-0 p-1 text-[#81859C]'>{product.price}</p>
								<span className='bg-[#E9F0FF] p-[2px] rounded-md'>-{product.discount}%</span>
							</div>
							<span className='font-semibold tracking-tight text-gray-900 dark:text-white text-start text-3xl'>
								{discountedPrice}
							</span>
						</div>
						<div>
							<FaShoppingCart className='h-8 w-8 flex-none text-puropelo-dark' />
						</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export default ShopingCard;
