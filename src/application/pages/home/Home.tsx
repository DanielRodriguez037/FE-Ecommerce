import React from 'react';
import Layout from '@application/layout/Layout';
import Banner from '@components/banner/Banner';
import InformationBanner from '@components/infomationBanner/InformationBanner';
import FeaturedCategories from '@components/featuredCategories/FeaturedCategories';
import FeaturedProduct from '@components/featuredProduct/FeaturedProduct';
import { BrandDemo } from '@components/brands/Brands';

const Home = () => {
	return (
		<Layout>
			<Banner />
			<InformationBanner />
			<div className='py-5 px-5 flex justify-center flex-col items-center gap-10'>
				<FeaturedProduct />
				<FeaturedCategories />
			</div>
			<BrandDemo />
		</Layout>
	);
};

export default Home;
