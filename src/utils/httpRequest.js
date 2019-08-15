import 'whatwg-fetch';
import { message} from 'antd';
const get = (url, options) => {
    options = options || {};
    return fetch(url, {
        ...options,
        method: 'GET',
    }).then((res)=>{
        return res.json();
    }).then((res) => {
        return res;
    }).catch((e) => {
        return e;
    });
};

const post = (url, options,header) => {
    options = options || {};
    return fetch(url, {
        headers: {
            ...header,
            'Content-Type': 'application/json',
            'jeesitesessionid': sessionStorage.getItem('sessionId'),
        },
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(options.data || {})
    }).then((res)=>{
        return res.json();
    }).then((res) => {
        if(res.returnCode === '000001'){
            setTimeout(() => {
                location.href = location.pathname; 
            }, 1000);
            return res;     
        }else if(res.returnCode === '000000'){
        }else{
            message.error(res.returnMsg)
        }
        return res;   
    }).catch((e) => {
        return e;
    });
};

export default {
    get,
    post,
};
