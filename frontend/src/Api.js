import axios from 'axios';

async function getRecipes(ingredient) {
    try {
        let res = await axios.post(`http://localhost:3001/get-results/${ingredient}`);
        return res.json;
    } catch(err) {
        console.error('API ERROR', err.response);
    };
};

export default getRecipes;