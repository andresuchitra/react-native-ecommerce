import axios from 'axios'
var token = '';
const requestToken = ()  => {
    return axios({
        method: 'POST',
        url: 'https://www.bukalapak.com/auth_proxies/request_token'
    });
}

const refreshToken = (newToken) => {
    token = newToken;
}

export {token, requestToken, refreshToken}