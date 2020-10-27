import axios from "axios";

const instance = axios.create({
    baseURL: "..." //API  cloud URL
});

export default instance;