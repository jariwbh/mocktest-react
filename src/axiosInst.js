import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://live.edzskool.com/api',
    headers: {
        'Content-Type': 'application/json',
        'authkey': '5efd797e249730fbb24401ad'
    }
});

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;