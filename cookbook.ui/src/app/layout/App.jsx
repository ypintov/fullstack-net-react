import React, { Component } from 'react';
import Routes from '../config/Routes';
import { ToastContainer } from 'react-toastify';

class App extends Component {


  render() {

    return (
      <>
        <ToastContainer position="bottom-right" />
        <Routes />
      </>
    )
  }
}

export default App;
