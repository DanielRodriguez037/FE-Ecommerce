import { get } from '@services/settings/http.service';
import { MICROSERVICES } from '@services/settings/envairoment';
import { IProductFilterDto } from '@interfaces/products/product.interface';

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