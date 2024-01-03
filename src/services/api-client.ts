import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com' ,
    params:{
        key: 'c7b18323a47d40c394ea5b019646b1f5'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll= () => {
        return axiosInstance
        .get<T[]>(this.endpoint)
        .then(res => res.data);
    }
}

export default APIClient;