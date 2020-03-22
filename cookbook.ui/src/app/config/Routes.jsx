import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../features/home/HomePage'
import { Container } from 'semantic-ui-react'
import RecipeDashboard from '../../features/recipes/dashboard/RecipeDashboard'
import NavBar from '../../features/NavBar'
import RecipeDetails from '../../features/recipes/details/RecipeDetails'
import RecipeForm from '../../features/recipes/form/RecipeForm'

const Routes = ({ location }) => {
    return (
        <>
            <Route exact path='/' component={HomePage} />
            <Route
                path={'/(.+)'}
                render={() => (
                    <>
                        <NavBar />
                        <Container style={{ marginTop: '7em' }}>
                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route exact path='/recipes' component={RecipeDashboard} />
                                <Route exact path='/recipes/:id' component={RecipeDetails} />
                                {/* <Route
                                    key={location.key}
                                    path={['/createRecipe', '/manage/:id']}
                                    component={RecipeForm}
                                /> */}
                            </Switch>
                        </Container>
                    </>
                )}
            />
        </>

    )
}

export default Routes
