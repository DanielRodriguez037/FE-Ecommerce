import React from 'react';
import Layout from '@modules/layout/Layout';
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
			<FeaturedProduct />
			<FeaturedCategories />
			<BrandDemo />
		</Layout>
	);
};

export default Home;
