import axios from 'axios';
const token = 'c7e6c965ad631a9621eee7b3cfb3756554f8c9ff';
export default axios.create({
    baseURL: `https://api.github.com`,
    headers: { 
                contentType: `application/json`,
                charset: `utf-8`,
                Authorization: `token ${ token }`,
                
            }
});