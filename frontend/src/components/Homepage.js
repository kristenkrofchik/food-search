import React from 'react';
import SiteFooter from '../shared/SiteFooter';
import { Box, Button, Form, FormField, Heading, Main, TextInput } from 'grommet';
import { useNavigate } from 'react-router-dom';

const Homepage = (props) => {

    let navigate = useNavigate();

    const handleChange = evt => {
        props.setIngredient({ingredient: evt.target.value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleSearch();
        navigate('/results');
    };

    return (
        <>
            <Main pad="medium">
                <Box className='main-image'>
                    <Box align="center">
                        <Heading level="1" responsive textAlign="center" color="dark" >The Meal Maker</Heading>
                        <Heading level="3" responsive textAlign="center" color="dark">You pick an ingredient, we'll give you a list of things to make!</Heading>
                    </Box>
                    <Box align="center">
                        <Form onSubmit={handleSubmit}>
                            <FormField label="Ingredient" name="ingredient">
                                <TextInput name="ingredient" value={props.ingredient.ingredient} onChange={handleChange} />
                            </FormField>
                            <Box direction="row" justify="between" margin={{ top: "medium" }}>
                                <Button type="submit" label="Submit" />
                            </Box>
                        </Form>
                    </Box>
                </Box>
            </Main>
            <SiteFooter />
        </>
    )
};

export default Homepage;