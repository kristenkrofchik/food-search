import React, { useContext } from 'react';
import RecipeCard from './RecipeCard';
import SiteFooter from '../shared/SiteFooter';
import { Box, Grid, Heading, Main, ResponsiveContext } from 'grommet';


const Results = (props) => {

    let resultItems = props.result.result.map(item => (
        <RecipeCard {...item} key={item.id} />
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
                        { resultItems }
                    </Grid>
                </Box>
            </Main>
            <SiteFooter />
        </>
    )
};

export default Results;