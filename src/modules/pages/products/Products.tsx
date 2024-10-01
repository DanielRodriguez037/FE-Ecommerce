import { Label, Select } from 'flowbite-react';
import { Accordion } from 'flowbite-react';

import Layout from '@modules/layout/Layout';
import BreadCrumb from '@shared/ui/components/breadcrumb/Breadcrumb';

const Products = () => {
	return (
		<Layout>
			<div className='py-5 px-16'>
				<div className='flex flex-row justify-between items-center'>
					<BreadCrumb subTitle='Productos' />

					<div className='max-w-lg flex flex-row items-center gap-4'>
						<div className='mb-2 block'>
							<Label htmlFor='countries' value='Mostrando 1-12 de 426 resultados' />
						</div>
						<Select id='countries' required>
							<option value='menu_order'>Orden predeterminado</option>
							<option value='popularity'>Ordenar por popularidad</option>
							<option value='rating' selected={true}>
								Ordenar por puntuación media
							</option>
							<option value='date'>Ordenar por los últimos</option>
							<option value='price'>Ordenar por precio: bajo a alto</option>
							<option value='price-desc'>Ordenar por precio: alto a bajo</option>
						</Select>
					</div>
				</div>
				<div className='flex flex-row flex-wrap'>
					<div className='max-w-[25%]'>
                        <span>Filtros</span>
						<Accordion collapseAll>
							<Accordion.Panel>
								<Accordion.Title>What is Flowbite?</Accordion.Title>
								<Accordion.Content>
                                <Select id='countries' required>
                                    <option value='menu_order'>Orden predeterminado</option>
                                    <option value='popularity'>Ordenar por popularidad</option>
                                    <option value='rating' selected={true}>
                                        Ordenar por puntuación media
                                    </option>
                                    <option value='date'>Ordenar por los últimos</option>
                                    <option value='price'>Ordenar por precio: bajo a alto</option>
                                    <option value='price-desc'>Ordenar por precio: alto a bajo</option>
                                </Select>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>What is Flowbite?</Accordion.Title>
								<Accordion.Content>
                                <Select id='countries' required>
                                    <option value='menu_order'>Orden predeterminado</option>
                                    <option value='popularity'>Ordenar por popularidad</option>
                                    <option value='rating' selected={true}>
                                        Ordenar por puntuación media
                                    </option>
                                    <option value='date'>Ordenar por los últimos</option>
                                    <option value='price'>Ordenar por precio: bajo a alto</option>
                                    <option value='price-desc'>Ordenar por precio: alto a bajo</option>
                                </Select>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>What is Flowbite?</Accordion.Title>
								<Accordion.Content>
                                <Select id='countries' required>
                                    <option value='menu_order'>Orden predeterminado</option>
                                    <option value='popularity'>Ordenar por popularidad</option>
                                    <option value='rating' selected={true}>
                                        Ordenar por puntuación media
                                    </option>
                                    <option value='date'>Ordenar por los últimos</option>
                                    <option value='price'>Ordenar por precio: bajo a alto</option>
                                    <option value='price-desc'>Ordenar por precio: alto a bajo</option>
                                </Select>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>What is Flowbite?</Accordion.Title>
								<Accordion.Content>
                                <Select id='countries' required>
                                    <option value='menu_order'>Orden predeterminado</option>
                                    <option value='popularity'>Ordenar por popularidad</option>
                                    <option value='rating' selected={true}>
                                        Ordenar por puntuación media
                                    </option>
                                    <option value='date'>Ordenar por los últimos</option>
                                    <option value='price'>Ordenar por precio: bajo a alto</option>
                                    <option value='price-desc'>Ordenar por precio: alto a bajo</option>
                                </Select>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>What is Flowbite?</Accordion.Title>
								<Accordion.Content>
                                <Select id='countries' required>
                                    <option value='menu_order'>Orden predeterminado</option>
                                    <option value='popularity'>Ordenar por popularidad</option>
                                    <option value='rating' selected={true}>
                                        Ordenar por puntuación media
                                    </option>
                                    <option value='date'>Ordenar por los últimos</option>
                                    <option value='price'>Ordenar por precio: bajo a alto</option>
                                    <option value='price-desc'>Ordenar por precio: alto a bajo</option>
                                </Select>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>
					</div>
                    <div className='max-w-[75%]'></div>
				</div>
			</div>
		</Layout>
	);
};

export default Products;
