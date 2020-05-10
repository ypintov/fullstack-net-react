import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import Routes from '../config/Routes'
import { getUser } from '../store/actions/authActions'
import ModalContainer from '../common/modals/ModalContainer'
import { getJwt } from '../config/auth/credentialConfiguration'
import LoadingComponent from './LoadingComponent'

const actions = {
  getUser
}

const App = ({ getUser }) => {
  const token = getJwt()
  const [appLoaded, setAppLoaded] = useState(false)

  useEffect(() => {
    if (token) getUser().finally(() => setAppLoaded(true))
    else setAppLoaded(true)
  }, [getUser, token])

  if (!appLoaded) return <LoadingComponent content="Loading App.." />
  return (
    <>
      <ModalContainer />
      <ToastContainer position="bottom-right" />
      <Routes />
    </>
  )
}

App.propTypes = {
  getUser: PropTypes.func.isRequired
}

export default connect(null, actions)(App)
