import React, { useState, useEffect } from 'react';
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

    async function getResults() {
        let recipes = await getRecipes(ingredient.ingredient);
        setResult({result: recipes});
    }

    useEffect(() => {
        console.log(result);
      }, [result])

    const handleSubmit = (evt) => {
        evt.preventDefault();
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