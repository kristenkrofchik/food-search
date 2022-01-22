import React, { useState } from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { useNavigate } from 'react-router-dom';
import getRecipes from '../Api';

const defaultValue = {
    ingredient: ''
};

const SearchBox = () => {
    const [value, setValue] = useState(defaultValue);
    const [result, setResult] = useState();
    let navigate = useNavigate();

    const handleChange = evt => {
        const { name, value } = evt.target;
        setValue(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        async function getResults() {
            await getRecipes(value)
        };
        setResult(getResults());
        navigate('/results', {state: result});
    };
    
    return (
        <>
            <Box width="medium" align="center">
                <Form value={value} onSubmit={handleSubmit}>
                    <FormField label="Ingredient" name="ingredient">
                        <TextInput name="ingredient" onChange={handleChange} />
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