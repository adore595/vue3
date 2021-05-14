import axios from "axios";

const instance = axios.create({
    baseURL:"http://127.0.0.1:9999/user",
    timeout:5000
})

export function post(url,data) {
    return instance.post(url,data)

}


export function get(url,params) {
    return instance.get(url,{
        params
    })

}