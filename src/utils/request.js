import axios from "axios"
import Config from "react-native-config";
// https://listicle.deegeehub.com/api/services/
export default request = ({ url, method, data, headers }) => {
    return axios({
        method: method || 'get',
        url: `https://listicle.deegeehub.com/api${url}`,
        data,
        headers,
    });
}

export const addTokenToAxios = (token) => {
    axios.defaults.headers.Authorization = token;
}