import axios from 'axios';
const token = '7c6b06df84bf2071586197be39092e2fb5cd0b39';
export default axios.create({
    baseURL: `https://api.github.com`,
    headers: { 
                contentType: `application/json`,
                Authorization: `${token}`,
            }
});

