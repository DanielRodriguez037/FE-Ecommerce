import { SetState } from 'zustand'
import { productServices } from '@services/products/product.service'
import { PuropeloState } from '@store/store'
import { IProductFilterDto } from '@interfaces/products/product.interface';

const createProductInitialState = {
    featured_product: []
}

const createProductState = (set: SetState<PuropeloState>): IProductStore => ({
    createProduct: {},
    featured_product: null,
    setfeaturedProduct: async () => {
        const featured_product = await productServices.getfeaturedProduct();
        set({ featured_product: [featured_product] });
    },
});

interface IProductStore {
    createProduct: object;
    featured_product: IProductFilterDto[] | null;
    setfeaturedProduct: (products) => void;
}

export { createProductState, IProductStore, createProductInitialState }