import React, { useState } from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { useNavigate } from 'react-router-dom';

const defaultValue = {
    ingredient: ''
};

const SearchBox = () => {
    const [value, setValue] = useState(defaultValue);
    let navigate = useNavigate();

    const handleChange = evt => {
        const { name, value } = evt.target;
        setValue(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        //call api and redirect to results page
        setValue(value);
        navigate('/results');
    }
    
    return (
        <>
            <Box width="medium" align="center">
                <Form value={value} onSubmit={handleSubmit}>
                    <FormField label="Ingredient" name="ingredient">
                        <TextInput name="ingredient" onChange={handleChange} />
                    </FormField>
                    <Box direction="row" justify="between" margin={{ top: "medium" }}>
                        <Button type="submit"label="Submit" />
                    </Box>
                </Form>
            </Box>
        </>
    )
};

export default SearchBox;