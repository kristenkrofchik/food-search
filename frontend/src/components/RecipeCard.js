import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, ResponsiveContext } from 'grommet';
import { getMoreInfo } from '../Api';

const RecipeCard = (item) => {
    const { id, title, image } = item;

    const size = useContext(ResponsiveContext);

    let navigate = useNavigate();

    const onClick = (evt) => {
        evt.preventDefault();
        navigate(`/results/${id}`);
    }

    return (
        <Card height='medium' width={size} background='light-3'>
            <CardHeader pad='medium'>{title}</CardHeader>
            <CardBody pad='medium'>
                <Image fit='contain' src={image} />
            </CardBody>
            <CardFooter pad='medium' background='light-5'>
                <Button label="Read More!" onClick={onClick} />
            </CardFooter>
        </Card>
    )
}

export default RecipeCard;