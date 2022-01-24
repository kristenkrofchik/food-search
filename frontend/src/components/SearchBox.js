import React, { useState } from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { useNavigate } from 'react-router-dom';
import getRecipes from '../Api';


const SearchBox = () => {
    const [ingredient, setIngredient] = useState({
        ingredient: ''
    });
    
    const [results, setResults] = useState({
        results: ''
    });

    let navigate = useNavigate();

    const handleChange = evt => {
        setIngredient({ingredient: evt.target.value});
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        let recipes = await getRecipes(ingredient.ingredient);
        setResults({ results: recipes });
        console.log(results);
        setIngredient('');
        navigate('/results'); 
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