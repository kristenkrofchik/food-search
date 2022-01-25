import React, { useState } from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
//import { useNavigate } from 'react-router-dom';
import getRecipes from '../Api';


const SearchBox = () => {
    const [ingredient, setIngredient] = useState({
        ingredient: ''
    });

    const [result, setResult] = useState({
        result: ''
    });


    //let navigate = useNavigate();

    const handleChange = evt => {
        setIngredient({ingredient: evt.target.value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        async function getResults() {
            let recipes = await getRecipes(ingredient.ingredient);
            setResult(recipes);
        };
        getResults();
        setIngredient('');
        /*navigate('/results', {state: {recipeResults: result}});*/
    };


    return (
        <>
            <Box width="medium" align="center">
                <Form onSubmit={handleSubmit}>
                    <FormField label="Ingredient" name="ingredient">
                        <TextInput name="ingredient" value={ingredient.ingredient} onChange={handleChange} />
                    </FormField>
                    <Box direction="row" justify="between" margin={{ top: "medium" }}>
                        <Button type="submit" label="Submit" />
                    </Box>
                </Form>
            </Box>
        </>
    )
};

export default SearchBox;