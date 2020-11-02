import axios from "axios";

const instance = axios.create({
    baseURL:"https://us-central1-clone-8625e.cloudfunctions.net/api"
     //"http://localhost:5001/clone-8625e/us-central1/api" //API  cloud URL
});

export default instance;
