import React from 'react'
import { Segment, Card } from 'semantic-ui-react'

const RecipeDetailSideBar = ({ recipe }) => {
    return (
        <Segment attached>
            <Card fluid>
                <Card.Content header="Nutrition Info" />
                <Card.Content description={recipe.nutritionInfo} />
            </Card>
        </Segment>
    )
}

export default RecipeDetailSideBar
