import axios from 'axios'
import baseConfig from '../configs/baseConfig'

export function request(config){
    return axios.create({
        baseURL : baseConfig.BASEURL,
        timeout : 5000
    })(config);
}
