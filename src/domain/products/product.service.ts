import { get } from '@domain/settings/http.service';
import { MICROSERVICES } from '@domain/settings/envairoment';
import { IProductFilterDto } from '@domain/products/product.interface';

const { featured_product: _featured_product } = MICROSERVICES;
const featured_product = `${_featured_product}`;

const getfeaturedProduct = async () => {
    const res = get<IProductFilterDto>({
        url: `${featured_product}`,
    }).then(resp => resp);
    const json = await res;
    return json;
};

const productServices = {
    getfeaturedProduct,
};

export { productServices };
