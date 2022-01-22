const { axios } = require('axios');
const express = require('express');
const { BadRequestError } = require('./expressError');
const router = new express.Router();

async function searchIngredient(query) {
    let result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}`);
    let resultArr = 
}