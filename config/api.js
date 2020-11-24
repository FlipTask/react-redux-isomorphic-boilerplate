import axios from "axios";

const axiosInstance = (config = {}, baseUrl = "") => {
    const instance = axios.create({
        baseURL: `${baseUrl}/api/v1`,
        ...config
    });
    instance.interceptors.request.use((response) => response, (error) => {
        console.log("Logging Error", error);
    });
    return instance;
};

export default axiosInstance;
