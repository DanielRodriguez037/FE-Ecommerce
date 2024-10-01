import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

interface BreadCrumbProps {
	subTitle: string;
}

const BreadCrumb = ({subTitle}:BreadCrumbProps) => {
	return (
		<Breadcrumb aria-label='Default breadcrumb example'>
			<Breadcrumb.Item href='/' icon={HiHome}>
				Home
			</Breadcrumb.Item>
			<Breadcrumb.Item href='#'>{subTitle}</Breadcrumb.Item>
			<Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default BreadCrumb;
