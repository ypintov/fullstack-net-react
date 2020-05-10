import React from 'react'
import { Segment, Container, Header, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openModal } from '../../app/store/actions/modalActions'
import LoginForm from '../auth/LoginForm'
import { getJwt } from '../../app/config/auth/credentialConfiguration'
// import RegisterForm from '../auth/RegisterForm'

const mapState = (state) => ({
  currentUser: state.auth.currentUser,
  token: getJwt()
})

const actions = {
  openModal
}

const HomePage = ({ currentUser, token, openModal }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Icon name="food" /> CookBook
        </Header>
        {currentUser && token ? (
          <>
            <Header as="h2" inverted content="Welcome back username" />
            <Button as={Link} to="/recipes" size="huge" inverted>
              Go To Recipes
            </Button>
          </>
        ) : (
          <>
            <Header as="h2" inverted content="Welcome to CookBook" />
            <Button onClick={() => openModal(<LoginForm />)} size="huge" inverted>
              Login
            </Button>
           {/*  <Button onClick={() => openModal(<RegisterForm />)} size="huge" inverted>
              Register
            </Button> */}
          </>
        )}
      </Container>
    </Segment>
  )
}

HomePage.propTypes = {
  currentUser: PropTypes.object,
  token: PropTypes.string,
  openModal: PropTypes.func.isRequired
}

HomePage.defaultProps = {
  currentUser: null,
  token: null
}

export default connect(mapState, actions)(HomePage)
