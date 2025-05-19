import axios from 'axios';
import { cookies } from 'next/headers'
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    async (config) => {

        const cookieStore = await cookies()
        let token = cookieStore.get('auth-token');
        //console.log('Axios interceptor ');
        if(token)
        {
            config.headers['Authorization'] = 'Bearer '+token.value;
        }
        config.headers['Content-Type'] = 'application/json';
        //console.log('Headers ',config.headers);
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;