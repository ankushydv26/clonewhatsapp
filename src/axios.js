import axios from "axios";
//baseURL axios
const instance = axios.create({
    baseURL:"http://localhost:9000",
})

export default instance;