type IBannerDto = {
	map(arg0: (banner: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
	title: string;
	description: string;
	image: string;
	url: string;
	isAtive: boolean;
};

export { IBannerDto };
