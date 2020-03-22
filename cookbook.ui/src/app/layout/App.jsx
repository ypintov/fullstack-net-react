import React, { Component } from 'react';
import NavBar from '../../features/NavBar';
import { Container } from 'semantic-ui-react';
import RecipeDashboard from '../../features/recipes/dashboard/RecipeDashboard';
import Routes from '../config/Routes';

class App extends Component {


  render() {

    return (
      <>
        <Container style={{ marginTop: '7em' }}>
          <Routes />
        </Container>
      </>
    )
  }
}

export default App;
