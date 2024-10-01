import { SetState } from 'zustand'
import { homeServices } from '@services/home/home.service'
import { PuropeloState } from '@store/store'
import { IProductDto } from '@interfaces/products/product.interface';

const createHomeInitialState = {
    products: []
}

const createHomeState = (set: SetState<PuropeloState>): IHomeStore => ({
	createHome: {},
	allproducts: null,
	setAllProducts: async () => {
		const products = await homeServices.getAllProducts();
		set({ allproducts : [products] });
	},
});

interface IHomeStore {
	createHome: object;
	allproducts: IProductDto[] | null;
	setAllProducts: (products) => void;
}

export { createHomeState, IHomeStore, createHomeInitialState }