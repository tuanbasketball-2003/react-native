import axios from "axios"


export default request = ({ url, method, data }) => {
    return axios({
        method: method || 'get',
        url: `https://listicle.deegeehub.com/api${url}`,
        data,
    });

}