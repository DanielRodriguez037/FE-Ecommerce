import { get } from "@services/settings/http.service";
import { MICROSERVICES } from "@services/settings/envairoment";
import { IBannerDto } from '@interfaces/banner/banner.interface';

const { banner: _banner } = MICROSERVICES;
const banner = `${_banner}`;

const getBanner = async () => {
    const res = get<IBannerDto>({
        url: `${banner}`,
    }).then(resp => resp);
    const json = await res;
    return json;
};

const bannerServices = {
    getBanner,
};  

export { bannerServices };