//Function for calling backend GET route. returns result data

import axios from 'axios';

async function getRecipes(ingredient) {
    try {
        const headers = {
            "Content-Type": "application/json",
          };
        let result = await axios.get(`http://localhost:3001/get-results/${ingredient}`, { headers });
        //localStorage.setItem('result', JSON.stringify(result.data));
        return result.data;
    } catch(err) {
        console.error('FRONTEND API ERROR: getRecipes', err.response);
    };
};

async function getMoreInfo(id) {
    try {
        const headers = {
            "Content-Type": "application/json",
          };
        let result = await axios.get(`http://localhost:3001/get-info/${id}`, { headers });
        return result.data;
    } catch(err) {
        console.error('FRONTEND API ERROR: getMoreInfo', err.response);
    }
}

export {getRecipes, getMoreInfo};