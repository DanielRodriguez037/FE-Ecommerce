import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

interface BreadCrumbProps {
	subTitle: string;
	secondSubTitle?: string;
}

const BreadCrumb = ({ subTitle, secondSubTitle }: BreadCrumbProps) => {
	return (
		<Breadcrumb aria-label='Default breadcrumb example'>
			<Breadcrumb.Item href='/' icon={HiHome}>
				Home
			</Breadcrumb.Item>
			<Breadcrumb.Item className='capitalize' href={`/${subTitle}`}>
				{subTitle}
			</Breadcrumb.Item>
			{secondSubTitle &&
				<Breadcrumb.Item className='capitalize'>{secondSubTitle}</Breadcrumb.Item>
			}
		</Breadcrumb>
	);
};

export default BreadCrumb;
