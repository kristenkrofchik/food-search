import React, {useContext} from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, ResponsiveContext } from 'grommet';
import { getMoreInfo } from '../Api';

const RecipeCard = (item) => {
    const { id, title, image } = item;

    const size = useContext(ResponsiveContext);

    let url = getMoreInfo(id);

    return (
        <Card height='medium' width={size} background='light-3'>
            <CardHeader pad='medium'>{title}</CardHeader>
            <CardBody pad='medium'>
                <Image fit='contain' src={image} />
            </CardBody>
            <CardFooter pad='medium' background='light-5'>
                <Button label="Read More!"  href={url}/>
            </CardFooter>
        </Card>
    )
}

export default RecipeCard;