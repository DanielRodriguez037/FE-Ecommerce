import create from 'zustand';
import { persist,devtools } from 'zustand/middleware';
import { createHomeState, IHomeStore } from '../domain/home/home';
import { createBannerState, IBannerStore } from '../domain/banner/banner';
import { createProductState, IProductStore } from '../domain/products/product';


type TypeGlobalActions = {
    clearStorage: () => void;
};

export type PuropeloState = TypeGlobalActions &
	IBannerStore &
	IProductStore &
    IHomeStore;

const useStore = create<PuropeloState>()(
	devtools(
		persist(
			set => ({
				...createHomeState(set),
				...createBannerState(set),
				...createProductState(set),
				clearStorage: () => {
					localStorage.removeItem('puropelo-storage');
				},
			}),
			{
				name: 'puropelo-storage',
				partialize: state => ({
					allProducts: state.allproducts,
					allBanner: state.allbanners,
				}),
			}
		)
	)
);

export default useStore;