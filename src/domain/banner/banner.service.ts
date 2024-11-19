import { get } from "@src/domain/settings/http.service";
import { MICROSERVICES } from "@src/domain/settings/envairoment";
import { IBannerDto } from '@src/domain/banner/banner.interface';

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