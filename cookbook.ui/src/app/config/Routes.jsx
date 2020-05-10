import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar'
import RecipeDashboard from '../../features/recipes/dashboard/RecipeDashboard'
import RecipeDetails from '../../features/recipes/details/RecipeDetails'
import RecipeForm from '../../features/recipes/form/RecipeForm'
import NotFound from '../layout/NotFound'
import ProfilePage from '../../features/profiles/ProfilePage'

const Routes = ({ location }) => {
    return (
        <>
            <Route exact path="/" component={HomePage} />
            <Route
                path="/(.+)"
                render={() => (
                    <>
                        <NavBar />
                        <Container style={{ marginTop: '7em' }}>
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/recipes" component={RecipeDashboard} />
                                <Route path="/recipes/:id" component={RecipeDetails} />
                                <Route key={location.key} path={['/createRecipe', '/manage/:id']} component={RecipeForm} />
                                <Route path="/profile/:username" component={ProfilePage} />
                                <Route component={NotFound} />
                            </Switch>
                        </Container>
                    </>
                )}
            />
        </>
    )
}

export default withRouter(Routes)
