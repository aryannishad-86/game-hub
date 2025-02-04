import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1d3e73a2222a4775854dbc8eb4eb26bb'
    }
});