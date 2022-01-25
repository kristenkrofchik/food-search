import React, {useContext} from 'react';
import { Card, CardBody, CardHeader, Image, ResponsiveContext } from 'grommet';

const RecipeCard = (item) => {
    const { title, image } = item;

    const size = useContext(ResponsiveContext);

    return (
        <Card height='medium' width={size} background='light-3'>
            <CardHeader pad='medium'>{title}</CardHeader>
            <CardBody pad='medium'>
                <Image fit='contain' src={image} />
            </CardBody>
        </Card>
    )
}

export default RecipeCard;