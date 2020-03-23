import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'

const RecipeDetailInfo = ({ recipe }) => {
    return (
        <Segment.Group>
            <Segment attached>
                <Container fluid>
                    <Header as="h2" content="Ingredients" />
                    <p>{recipe.ingredients}</p>
                </Container>
            </Segment>
            <Segment attached>
                <Container fluid>
                    <Header as="h2" content="Directions" />
                    <p>{recipe.directions}</p>
                </Container>
            </Segment>
        </Segment.Group>
    )
}

export default RecipeDetailInfo
