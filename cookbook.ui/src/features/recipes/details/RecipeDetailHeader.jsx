import React from 'react'
import { Segment, Image, Item, Header, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const recipeImageStyle = {
    filter: 'brightness(30%)'
}

const recipeImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
}

const RecipeDetailHeader = ({ recipe }) => {
    return (
        <Segment.Group>
            <Segment>
                <Image src='/assets/white-image.png' style={recipeImageStyle} />
                <Segment basic style={recipeImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header size='huge' content={recipe.title} style={{ color: 'white' }} />
                                <p>
                                    Recipe by {' '}
                                    <Link to={``}>
                                        <strong>Yojan</strong>
                                    </Link>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment attached>
                <Container fluid textAlign='center'>
                    <p>{recipe.summary}</p>
                </Container>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button
                    color='orange'
                    floated='right'
                    as={Link}
                    to={`/manage/${recipe.id}`}
                >
                    Edit Recipe
                    </Button>
            </Segment>
        </Segment.Group>
    );
};

export default RecipeDetailHeader
