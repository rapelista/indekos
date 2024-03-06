import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_API_URL });

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

class ApiService {
    post(endpoint: string, data: any, config?: AxiosRequestConfig<any>) {
        return new Promise((resolve, reject) => {
            api.post(endpoint, data, config)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response));
        });
    }
}

export default new ApiService();
