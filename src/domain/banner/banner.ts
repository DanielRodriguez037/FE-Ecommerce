import { SetState } from 'zustand';
import { bannerServices } from '@domain/banner/banner.service';
import { PuropeloState } from '@store/store';
import { IBannerDto } from '@domain/banner/banner.interface';

const createBannerInitialState = {
	banner: [],
};

const createBannerState = (set: SetState<PuropeloState>): IBannerStore => ({
	createBanner: {},
	allbanners: null,
	setAllBanners: async () => {
		const banner = await bannerServices.getBanner();
		set({ allbanners: banner });
	},
});

interface IBannerStore {
	createBanner: object;
	allbanners: IBannerDto | null;
	setAllBanners: (banner) => void;
}

export { createBannerState, IBannerStore, createBannerInitialState };
