import { get } from '@domain/settings/http.service';
import { MICROSERVICES } from '@domain/settings/envairoment';
import { IProductDto } from '@domain/products/product.interface';

const { product: _product } = MICROSERVICES;
const product = `${_product}`;

const getAllProducts = async () => {
	const res = get<IProductDto>({
		url: `${product}`,
	}).then(resp => resp);
	const json = await res;
	return json;
};

const homeServices = {
	getAllProducts,
};

export { homeServices };
