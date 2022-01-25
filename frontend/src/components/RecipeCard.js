import React, {useContext, useEffect} from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, ResponsiveContext } from 'grommet';
import { getMoreInfo } from '../Api';

const RecipeCard = (item) => {
    const { id, title, image } = item;

    const size = useContext(ResponsiveContext);

    let info = getMoreInfo(id);

    useEffect(() => {
        console.log(info);
      }, [info]);

    return (
        <Card height='medium' width={size} background='light-3'>
            <CardHeader pad='medium'>{title}</CardHeader>
            <CardBody pad='medium'>
                <Image fit='contain' src={image} />
            </CardBody>
            <CardFooter pad='medium' background='light-5'>
                <Button label="Read More!"  />
            </CardFooter>
        </Card>
    )
}

export default RecipeCard;