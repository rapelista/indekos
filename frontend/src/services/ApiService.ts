import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_API_URL });

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (
            error.response.status === 401 &&
            localStorage.getItem("token") !== null
        ) {
            localStorage.removeItem("token");
            window.location.reload();
        }
    }
);

class ApiService {
    get<T>(endpoint: string, config?: AxiosRequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            api.get(endpoint, config)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response));
        });
    }

    post<T>(
        endpoint: string,
        data?: any,
        config?: AxiosRequestConfig<T>
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            api.post(endpoint, data, config)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response));
        });
    }
}

export default new ApiService();
