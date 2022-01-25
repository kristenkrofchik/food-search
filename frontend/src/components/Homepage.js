import React from 'react';
import SiteFooter from '../shared/SiteFooter';
import SearchBox from './SearchBox';
import { Box, Heading, Main } from 'grommet';

const Homepage = (props) => {
    return (
        <>
            <div>
                <Main pad="medium">
                    <Box align="center">
                        <Heading level="1" responsive textAlign="center" color="dark" >The Meal Maker</Heading>
                        <Heading level="3" responsive textAlign="center" color="dark">You pick an ingredient, we'll give you a list of things to make!</Heading>
                    </Box>
                    <Box align="center">
                        <SearchBox ingredient={props.ingredient} setIngredient={props.setIngredient} handleSearch={props.handleSearch}/>
                    </Box>
                </Main>
            </div>
            <SiteFooter />
        </>
    )
};

export default Homepage;