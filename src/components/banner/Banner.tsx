import React, { useEffect} from 'react';
import { Carousel } from 'flowbite-react';
import useStore from '@store/store';

const Banner = () => {
	const { allbanners, setAllBanners } = useStore(state => ({
		setAllBanners: state.setAllBanners,
		allbanners: state.allbanners,
	}));

	useEffect(() => {
		setAllBanners(1);
	}, [setAllBanners]);

	return (
		<div className='h-64 sm:h-72 xl:h-80 2xl:h-96 py-1'>
			<Carousel>
				{allbanners?.map((banner, index) => (
					<img key={index} src={banner.url} alt={banner.title} />
				))}
			</Carousel>
		</div>
	);
};

export default Banner;
