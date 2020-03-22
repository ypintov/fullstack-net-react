import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import http from './app/api/http';

class App extends Component {

  state = {
    values: []
  }

  async componentDidMount() {

    const { data } = await http.get('/Values');
    console.log(data);
    this.setState({
      values: data
    })

  }

  render() {

    const { values } = this.state;

    return (
      <div>
        <h1>Hola mundo</h1>
          {
            values.map((t, index) => <p key={t.id}>{t.name}</p>)
          }

      </div>);


  }
}

export default App;
