import logo from '@assets/img/logo.png';
import { useState } from 'react';
import { FaCartShopping, FaArrowRightToBracket } from 'react-icons/fa6';
import { FaDog, FaCat, FaBars, FaTag, FaWhatsapp, FaFileSignature, FaSearch } from 'react-icons/fa';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverGroup,
} from '@headlessui/react';
import {  Drawer } from 'flowbite-react';

const products = [
	{ name: 'Perritos', href: '#', icon: FaDog },
	{ name: 'Gaticos', href: '#', icon: FaCat },
	{ name: 'Marca', href: '#', icon: FaTag },
	{ name: 'Blog', href: '#', icon: FaFileSignature },
];
const callsToAction = [
	{ name: 'Aceder', href: '#', icon: FaArrowRightToBracket },
	{ name: 'Whatsapp ', href: '#', icon: FaWhatsapp },
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);

	return (
		<header className='bg-white'>
			<nav aria-label='Global' className='mx-auto flex max-w-screen-2xl items-center justify-between p-2 lg:px-8'>
				<div className='flex lg:flex-1'>
					<a href='#' className='-m-1.5 p-1.5'>
						<span className='sr-only'>Puro Pelos</span>
						<img alt='' src={logo} className='h-20 w-auto' />
					</a>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						onClick={() => setMobileMenuOpen(true)}
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
						<span className='sr-only'>Menu</span>
						<Bars3Icon aria-hidden='true' className='h-6 w-6' />
					</button>
				</div>
				<PopoverGroup className='hidden lg:flex lg:gap-x-12 items-center'>
					<Popover className='relative'>
						<div
							onClick={() => setIsOpen(true)}
							className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
							Menu
							<FaBars aria-hidden='true' className='h-5 w-5  flex-none text-text-puropelo' />
						</div>
						<Drawer open={isOpen} onClose={handleClose}>
							<a href='#' className='-m-1.5 p-1.5 flex '>
								<span className='sr-only'>Puro Pelos</span>
								<img alt='' src={logo} className='h-20 w-auto' />
								<Drawer.Header titleIcon={() => <></>} />
							</a>
							<Drawer.Items>
								{products.map(item => (
									<div
										key={item.name}
										className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
										<div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
											<item.icon aria-hidden='true' className='h-6 w-6 text-text-puropelo group-hover:text-[#6f4b29]' />
										</div>
										<div className='flex-auto'>
											<a href={item.href} className='block font-semibold text-gray-900'>
												{item.name}
												<span className='absolute inset-0' />
											</a>
										</div>
									</div>
								))}
								<div className='p-4'></div>
								<div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
									{callsToAction.map(item => (
										<a
											key={item.name}
											href={item.href}
											className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'>
											<item.icon aria-hidden='true' className='h-5 w-5 flex-none text-gray-400' />
											{item.name}
										</a>
									))}
								</div>
							</Drawer.Items>
						</Drawer>
					</Popover>
					<div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 max-w-lg w-96'>
						<span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
							<FaSearch />
						</span>
						<input
							id='product'
							name='product'
							type='text'
							placeholder='Buscar...'
							className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
						/>
					</div>
					<a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
						About
					</a>
					<a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
						Company
					</a>
				</PopoverGroup>
				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<a href='#' className='flex items-center text-sm font-semibold leading-6 text-gray-900'>
						Carrito / $0
						<FaCartShopping aria-hidden='true' className='ml-3 h-5 w-5 flex-none text-text-puropelo' />
					</a>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
				<div className='fixed inset-0 z-10' />
				<DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<a href='#' className='-m-1.5 p-1.5'>
							<span className='sr-only'>Puro Pelo</span>
							<img alt='' src={logo} className='h-8 w-auto' />
						</a>
						<button type='button' onClick={() => setMobileMenuOpen(false)} className='-m-2.5 rounded-md p-2.5 text-gray-700'>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon aria-hidden='true' className='h-6 w-6' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								<Disclosure as='div' className='-mx-3'>
									<div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-lg'>
										<span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
											<FaSearch />
										</span>
										<input
											id='product'
											name='product'
											type='text'
											placeholder='Buscar...'
											className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
										/>
									</div>
									<DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
										Product
										<ChevronDownIcon aria-hidden='true' className='h-5 w-5 flex-none group-data-[open]:rotate-180' />
									</DisclosureButton>
									<DisclosurePanel className='mt-2 space-y-2'>
										{[...products, ...callsToAction].map(item => (
											<DisclosureButton
												key={item.name}
												as='a'
												href={item.href}
												className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
												{item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<a
									href='#'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
									Marketplace
								</a>
								<a
									href='#'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
									Company
								</a>
							</div>
							<div className='py-6'>
								<a
									href='#'
									className='flex items-center -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
									Carrito / $0
									<FaCartShopping aria-hidden='true' className='ml-3 h-5 w-5 flex-none text-text-puropelo' />
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Navbar;
