import React, { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface FilterItemProps {
	filters: { id: number; title: string; items: { id: number; title: string; url :string}[] }[];
}


interface AccordionItemProps {
	handleToggle: (index: number) => void;
	filter: { id: number; title: string; items: { id: number; title: string; url: string }[] };
	active: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ handleToggle, filter, active }) => {
	const contentEl = useRef(null);
	const { title, items, id } = filter;

	return (
		<div className='border-b-[1px] border-[#ECCC9F]'>
			<header
				className={`flex items-center justify-between h-12 py-0 pr-5 pl-3 cursor-pointer mb-3  ${
					active === id ? 'active' : ''
				}`}
				onClick={() => handleToggle(id)}>
				<h2 className='font-semibold text-puropelo font-[PoppinsRegular]'>{title}</h2>
				<span className={`transform transition-transform ${active === id ? 'rotate-180' : ''} `}>
					<IoIosArrowDown />
				</span>
			</header>
			<div
				ref={contentEl}
				className={`relative h-0 overflow-hidden ${active === id ? 'h-auto' : ''}`}
				style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}>
				<ul className='pl-5'>
					{items.map(item => {
						return (
							<li key={item.id} className='mb-2'>
								<a href={item.url}>
									{item.title} 
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

const Accordion: React.FC<FilterItemProps> = ({ filters,  }) => {
	const [active, setActive] = useState(0);

	const handleToggle = (index: number) => {
		setActive(active === index ? null : index);
	};

	return (
		<article className=' w-full p-5 rounded-xl'>
			{filters.map((item, index) => {
				return (
					<>
						<AccordionItem
							key={index}
							active={active}
							handleToggle={handleToggle}
							filter={item}
						/>
					</>
				);
			})}
		</article>
	);
};

export default Accordion;
