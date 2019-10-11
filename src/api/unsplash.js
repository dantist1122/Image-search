import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID 1de7460dd277b2f385a396b2bf476b60de633c4d826e21f0ad2da92ab1123e1d'
    }
});