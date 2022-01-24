import axios from 'axios';

async function getRecipes(ingredient) {
    try {
        return await axios.get(`http://localhost:3001/get-results/${ingredient}`);
    } catch(err) {
        console.error('API ERROR', err.response);
    };
};

export default getRecipes;