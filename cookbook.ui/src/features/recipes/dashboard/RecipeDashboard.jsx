import React from 'react'
import { Grid } from 'semantic-ui-react';
import RecipeList from './RecipeList';

const RecipeDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={9}>
                <RecipeList/>
            </Grid.Column>
            <Grid.Column width={9}>
                {'Loader'}
            </Grid.Column>
        </Grid>
    )
}

export default RecipeDashboard
