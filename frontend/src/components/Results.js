import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import SiteFooter from '../shared/SiteFooter';
import { Box, Grid, Heading, Main, ResponsiveContext } from 'grommet';


const Results = () => {
    let location = useLocation();
    let results = location.state.results;
    
    let resultsItems = results.map(result => (
        <RecipeCard {...result} key={result.id} />
    ));
    
    const size = useContext(ResponsiveContext);

    return (
        <>
            <Main pad='medium'>
                <Heading level='1' responsive textAlign='center'>
                    Your Recipes
                </Heading>
                <Box pad='medium'>
                    <Grid columns={size !== 'small' ? 'small' : '100%'}
                    gap='small'>
                        { resultsItems }
                    </Grid>
                </Box>
            </Main>
            <SiteFooter />
        </>
    )
};

export default Results;