import React from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import { combineValidators, isRequired } from 'revalidate'
import { connect } from 'react-redux'
import { FORM_ERROR } from 'final-form'
import { Form, Header, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { login } from '../../app/store/actions/authActions'
import TextInput from '../../app/common/form/TextInput'
import ErrorMessage from '../../app/common/form/ErrorMessage'

const actions = {
  login
}

const validate = combineValidators({
  email: isRequired('email'),
  password: isRequired('password')
})

const LoginForm = ({ login }) => {
  console.log();

  return (
    <FinalForm
      onSubmit={(values) => login(values).catch((error) => ({ [FORM_ERROR]: error }))}
      validate={validate}
      render={({ handleSubmit, submitting, submitError, invalid, pristine, dirtySinceLastSubmit }) => (
        <Form onSubmit={handleSubmit} error>
          <Header as="h2" content="Login to CookBook" color="pink" textAlign="center" />
          <Field name="email" component={TextInput} placeholder="Type your email" />
          <Field name="password" component={TextInput} placeholder="Type your password" type="password" />
          {submitError && !dirtySinceLastSubmit && (

            <ErrorMessage error={submitError} text="Invalid username or password" />
          )}
          <Button
            fluid
            disabled={(invalid && !dirtySinceLastSubmit) || pristine}
            loading={submitting}
            color="violet"
            content="login"
          />
          {/* form come from object destructuring */}
          {/* <pre>{JSON.stringify(form.getState(), null, 2)}</pre> */}
        </Form>
      )}
    />
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, actions)(LoginForm)
