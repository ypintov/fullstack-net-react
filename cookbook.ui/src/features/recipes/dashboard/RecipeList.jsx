import React, { Component } from 'react'
import { Segment, Header, Card } from 'semantic-ui-react'
import RecipeService from '../../../app/api/recipeService';
import RecipeCard from './RecipeCard';

export default class RecipeList extends Component {
    state = {
        recipes: []
    }

    async componentDidMount() {
        try {
            const recipes = await RecipeService.list();
            this.setState({
                recipes
            })
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        return (
            <Segment.Group>
                <Segment>
                    <Header as='h2' icon='food' content='Recipes od the day' />
                    <Card.Group itemsPerRow={1}>
                        {
                            this.state.recipes.map(recipe => (
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))
                        }
                    </Card.Group>
                </Segment>
            </Segment.Group>
        )
    }
}
