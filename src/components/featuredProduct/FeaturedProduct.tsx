import { FaShoppingBasket } from 'react-icons/fa';
import alimento from '@assets/img/alimento.png';
import useStore from '@store/store';
import { useEffect } from 'react';
import ShopingCard from '@ui/components/shopingCard/ShopingCard';

const FeaturedProduct = () => {
	const { featured_product, setfeaturedProduct } = useStore(state => ({
		featured_product: state.featured_product,
		setfeaturedProduct: state.setfeaturedProduct,
	}));

	useEffect(() => {
		const initialProducts = []; // Replace with the appropriate initial value
		setfeaturedProduct(initialProducts);
	}, [setfeaturedProduct]);
	const products = featured_product != null ? featured_product[0].products : [];

	return (
		<div className='w-[1191px]'>
			<div>
				<span className='flex font-calibri text-2xl items-center gap-2'>
					<FaShoppingBasket className='h-6 w-6 flex-none text-puropelo' />
					Promociones para mi
				</span>
			</div>
			<div className='flex justify-between gap-3 mt-8'>
				{products?.map((product, index) => (
					<ShopingCard product={product} img={alimento} key={index} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProduct;
