import React from 'react'
import { Form, Label } from 'semantic-ui-react'

const TextAreaInput = ({ input, width, rows, placeholder, meta: { touched, error } }) => {
    return (
        <Form.Field error={touched && !!error} width={width} >
            <textarea {...input} rows={rows} placeholder={placeholder} />
            {touched && error && (<Label basic color='red'>{error}</Label>)}
        </Form.Field>
    )
}

export default TextAreaInput
