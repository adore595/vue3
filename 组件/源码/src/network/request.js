import axios from 'axios';


const instance = axios.create({
    baseURL:'http://api.eduwork.cn/admin',
    timeout:5000
});


instance.interceptors.request.use(
    config=>{
      // config.headers.token = "1234656";
        console.log('-------------- config ------------');
        console.log(config);
        return config;
    },
    error =>{
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response=>{
        console.log('-------------- response ------------');
        console.log(response);
        return response;
    },
    error =>{
        return Promise.reject(error);
    }
)
export function get(url, params) {
    return instance.get(url, {
        params
    })
}

export function post(url, params) {
    return instance.post(url, params, {
        transformRequest:[
            function(data){
                let str = '';

                for(let key in data){
                    str += encodeURIComponent(key) +
                        '='
                        + encodeURIComponent(data[key]) + '&'
                }

                console.log(str);
                return str;
            }
        ],
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}

export function del(url){
    return instance.delete(url)
}



