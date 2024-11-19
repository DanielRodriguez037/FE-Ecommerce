import { get } from '@src/domain/settings/http.service';
import { MICROSERVICES } from '@src/domain/settings/envairoment';
import { IProductDto } from '@src/domain/products/product.interface';

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