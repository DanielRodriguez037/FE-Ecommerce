import { Label, Pagination, Select } from 'flowbite-react';
import Layout from '@application/layout/Layout';
import BreadCrumb from '@src/ui/components/breadcrumb/Breadcrumb';
import Accordion from '@src/ui/components/accordion/Accordion';
import ShopingCard from '@src/ui/components/shopingCard/ShopingCard';
import alimento from '@assets/img/alimento.png';

import useStore from '@store/store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const filters = [
	{
		id: 1,
		title: 'Categorias',
		items: [
			{ id: 1, title: 'Alimentos', url: '/productos/alimentos/' },
			{ id: 2, title: 'Accesorios', url: '/productos/accesorios/' },
			{ id: 3, title: 'Juguetes', url: '/productos/juguetes/' },
			{ id: 4, title: 'Belleza/Higiene', url: '/productos/belleza-higiene/' },
		],
	},
	{
		id: 2,
		title: 'Tipo de mascota',
		items: [
			{ id: 1, title: 'Perritos', url: '/productos/tipos_mascotas/perrito' },
			{ id: 2, title: 'Gaticos', url: '/productos/tipos_mascotas/gaticos' },
		],
	},
	{
		id: 3,
		title: 'Edad',
		items: [
			{ id: 1, title: 'Cachorritos', url: 'ege=cachorritos' },
		],
	},
];

const Products = () => {
	const { id } = useParams();
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);

	const { featured_product, setfeaturedProduct } = useStore(state => ({
		featured_product: state.featured_product,
		setfeaturedProduct: state.setfeaturedProduct,
	}));

	useEffect(() => {
		const initialProducts = []; // Replace with the appropriate initial value
		setfeaturedProduct(initialProducts);
	}, [setfeaturedProduct]);

	const products = featured_product?.[0]?.products || [];

	return (
		<Layout>
			<div className='py-5 lg:px-16 md:px-5'>
				<div className='flex flex-row justify-between items-center max-[600px]:flex-col'>
					<BreadCrumb subTitle='productos' secondSubTitle={id} />
					<div className='max-w-lg flex flex-row items-center gap-4 max-[600px]:flex-col'>
						<div className='mb-2 block max-[600px]:hidden'>
							<Label htmlFor='countries' value='Mostrando 1-12 de 426 resultados' />
						</div>
						<Select id='' className='mt-3'>
							<option value='menu_order'>Orden predeterminado</option>
							<option value='popularity'>Ordenar por popularidad</option>
							<option value='rating' selected>
								Ordenar por puntuación media
							</option>
							<option value='date'>Ordenar por los últimos</option>
							<option value='price'>Ordenar por precio: bajo a alto</option>
							<option value='price-desc'>Ordenar por precio: alto a bajo</option>
						</Select>
					</div>
				</div>
				<div className='flex flex-row flex-wrap sm:justify-between mt-8'>
					<div className='w-[25%] bg-white rounded max-[600px]:hidden'>
						<Accordion filters={filters} />
					</div>
					<div className='w-[70%] max-[600px]:w-full mx-2'>
						<div className='grid grid-cols-1 gap-3 max-[600px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
							{products.map((product, index) => (
								<ShopingCard product={product} img={alimento} key={index} />
							))}
						</div>
					</div>
				</div>
				<div className='flex overflow-x-auto sm:justify-center mt-8'>
					<Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
				</div>
			</div>
		</Layout>
	);
};

export default Products;
