const axios = require('axios');
const express = require('express');
const { BadRequestError } = require('./expressError');
const router = new express.Router();

require('dotenv').config()
const API_KEY = process.env.API_KEY;

router.get('/get-results/:ingredient', async (request, response, next) => {
    try {
        const ingredient = request.params.ingredient;
        let result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredient}`);
        return response.json(result.data);
    } catch(error) {
        console.log(error);
        throw new BadRequestError(message= 'There was an error. Please try again.')
    }
})


module.exports = router;