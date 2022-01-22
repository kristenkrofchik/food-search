const { axios } = require('axios');
const express = require('express');
const { BadRequestError } = require('./expressError');
const router = new express.Router();

router.get('/get-results/:ingredient', async (request, response) => {
    try {
        const ingredient = request.params.ingredient;
        let result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredient}`);
        return response.status(200).json(result);
    } catch(error) {
        console.log(error);
        throw new BadRequestError(message= 'There was an error. Please try again.')
    }
})


module.exports = router;