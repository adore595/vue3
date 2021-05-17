import axios from "axios";
import qs from "qs"

const instance = axios.create({
    baseURL:"http://127.0.0.1:9999/book",
    timeout:5000
})

export function post (url, data) {
    return instance({
        method: 'post',
        url,
        data: qs.stringify(data),
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

export function get (url, params) {
    return instance({
        method: 'get',
        url,
        params, // get 请求时带的参数
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}