import axios from 'axios';

async function getRecipes(ingredient) {
    try {
        const headers = {
            "Content-Type": "application/json",
          };
        let result = await axios.get(`http://localhost:3001/get-results/${ingredient}`, { headers });
        return result.data;
    } catch(err) {
        console.error('API ERROR', err.response);
    };
};

export default getRecipes;