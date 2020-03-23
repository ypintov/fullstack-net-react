import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    return <Card>
        <Image src='/assets/white-image.png' wrapped ui={false} />
        <Card.Content>
            <Card.Header as={Link} to={`/recipes/${recipe.id}`}>{recipe.title}</Card.Header>
            <Card.Description>
                {recipe.summary}
            </Card.Description>
            <Card.Content extra>
                <Icon name='user' />
                Posted by Yojan
            </Card.Content>
        </Card.Content>
    </Card>
}

export default RecipeCard
