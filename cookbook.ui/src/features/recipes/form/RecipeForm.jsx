import React, { useState, useEffect } from 'react'
import { Grid, Form, Segment, Button } from 'semantic-ui-react'
import { Form as FinalForm, Field } from 'react-final-form'
import { combineValidators, isRequired, composeValidators, hasLengthGreaterThan } from 'revalidate'
import TextInput from '../../../app/common/form/TextInput'
import TextAreaInput from '../../../app/common/form/TextAreaInput'
import RecipeService from '../../../app/api/recipeService'
import { toast } from 'react-toastify'

const RecipeForm = ({ match, history }) => {


    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (match.params.id) {
            setLoading(true);
            RecipeService.details(match.params.id)
                .then((recipe) => {
                    setRecipe(recipe);
                })
                .finally(() => {
                    setLoading(false);
                })

        }

    }, [match.params.id]);

    const handleFinalFormSubmit = async (values) => {
        const { ...recipe } = values
        setSubmitting(true)
        try {
            if (!recipe.id) {
                await RecipeService.create(recipe)
                setSubmitting(false)
                history.push('/recipes')
                toast.success('The recipe was successfully submitted')
            } else {
                await RecipeService.update(recipe)
                setSubmitting(false)
                history.push(`/recipes/${recipe.id}`)
                toast.success('The recipe was successfully updated')
            }
        } catch (error) {
            setSubmitting(false)
            toast.error('Problem submitting the recipe')
        }

    }

    const handleRemoveRecipe = async (id) => {
        setLoading(true)
        try {
            await RecipeService.delete(id)
            setLoading(false)
            history.push('/recipes')
            toast.success('The recipe was successfully removed')
        } catch (error) {
            setLoading(false)
            toast.error('Problem removing the recipe')
        }
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
                    initialValues={recipe}
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
                                loading={submitting}
                            />
                            <Button
                                floated="right"
                                color="grey"
                                type="button"
                                content="Cancel"
                                onClick={
                                    recipe ? () => history.push(`/recipes/${recipe.id}`) : () => history.push('/recipes')
                                }
                            />
                            {recipe && (
                                <Button
                                    floated="right"
                                    disabled={loading}
                                    negative
                                    type="button"
                                    content="Remove"
                                    onClick={() => handleRemoveRecipe(recipe.id)}
                                />
                            )}
                        </Form>}>

                </FinalForm>
            </Segment>
        </Grid.Column>
    </Grid>;
}

export default RecipeForm
