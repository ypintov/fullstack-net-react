import React from 'react'
import { Grid, Form, Segment, Button } from 'semantic-ui-react'
import { Form as FinalForm, Field } from 'react-final-form'
import { combineValidators, isRequired, composeValidators, hasLengthGreaterThan } from 'revalidate'
import TextInput from '../../../app/common/form/TextInput'
import TextAreaInput from '../../../app/common/form/TextAreaInput'

const RecipeForm = ({ match, history }) => {

    const handleFinalFormSubmit = values => {
        console.log(values);

    }

    const validate = combineValidators({
        title: isRequired({ message: 'The recipe title is required' }),
        summary: isRequired({ message: 'The summary is required' }),
        ingredients: composeValidators(
            isRequired({ message: 'The ingredients are required' }),
            hasLengthGreaterThan(4)({
                message: 'Ingredients need to be at least 6 characters'
            })
        )(),
        directions: isRequired({ message: 'The directions are required' }),
        nutritionInfo: isRequired({ message: 'The Nutrition Info is required' })
    });



    return <Grid>
        <Grid.Column width={10}>
            <Segment clearing>
                <FinalForm onSubmit={handleFinalFormSubmit}
                    validate={validate}
                    render={({ handleSubmit, invalid, pristine }) =>
                        <Form onSubmit={handleSubmit}>
                            <Field placeholder="Title" name="title" component={TextInput} />
                            <Field placeholder="Summary" name="summary" component={TextInput} />
                            <Field placeholder="Ingredients" name="ingredients" component={TextAreaInput} />
                            <Field placeholder="directions" name="directions" component={TextAreaInput} />
                            <Field placeholder="Nutrition Info" name="nutritionInfo" component={TextAreaInput} />

                            <Button
                                disabled={invalid || pristine}
                                floated="right"
                                positive
                                type="submit"
                                content="Submit"
                            />
                            <Button
                                floated="right"
                                color="grey"
                                type="button"
                                content="Cancel"
                            />
                        </Form>}>

                </FinalForm>
            </Segment>
        </Grid.Column>
    </Grid>;
}

export default RecipeForm
