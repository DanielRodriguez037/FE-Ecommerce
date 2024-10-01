
type IProductDto = {
	id: number;
	sku: string;
	name: string;
	description: string;
	quantity: number;
	price: string;
	product_size: string;
	discount: string;
	brand: number;
	weight: string;
	food_type: string;
	pet_age: string;
	food_analysis: string;
	ingredients: string;
	type_pet: string;
	product_line: string;
	is_active: boolean;
}

type IProductFilterDto = {
	products: IProductDto[];
	total_pages: number;
	current_page: number;
	has_next: boolean;
	has_previous: boolean;
}


export { IProductDto, IProductFilterDto };