import React from 'react'
import { Grid, Form, Input } from 'semantic-ui-react'

const RecipeForm = ({ match }) => {
    return <Grid>
        <Grid.Column width={10}>
            <Form>
                <Input placeholder='Recipe Name'/>
                <Input placeholder='Recipe Name'/>
                <Input placeholder='Recipe Name'/>
                <Input placeholder='Recipe Name'/>
                <Input placeholder='Recipe Name'/>
            </Form>
        </Grid.Column>
    </Grid>;
}

export default RecipeForm
