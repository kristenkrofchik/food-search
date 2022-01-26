import React, {useEffect, useState} from 'react';
import { getMoreInfo } from '../Api';
import {useParams} from 'react-router-dom';

const SingleResult = () => {
    let {id} = useParams();

    const [recipeData, setRecipeData] = useState({
        recipeData: {}
    });

    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        getResults(id);
    }, []);

    const getResults = () => {
        let res = getMoreInfo(id);
        setRecipeData({recipeData: res});
        setLoading(false);
    }

    useEffect(() => {
        try {
            async function getResults() {
                let data = await getMoreInfo(id);
                console.log(data);
                setRecipeData({recipeData: data});
            }
            getResults();
        } catch (err) {
                console.error(err);
        }
    }, []);

    if(isLoading) {
        return (
            <p>Loading...</p>
        );
    };
        
    return (
        <>
            <h3>{recipeData.recipeData.title}</h3>
            <a href={recipeData.recipeData.sourceUrl}>Link</a>
        </>
    )  
};

export default SingleResult;