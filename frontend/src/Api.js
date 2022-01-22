import axios from 'axios';

async function getRecipes(ingredient) {
    try {
        let res = await axios.get(`http://localhost:3001/get-results/${ingredient}`);
        return res.data;
    } catch(err) {
        console.error('API ERROR', err.response);
    };
};

export default getRecipes;