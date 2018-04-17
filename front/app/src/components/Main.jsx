import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';

const {Div} = glamorous;


class Main extends Component {
  render() {
    (async function() {
      const data = axios.get('/api');

      console.log(data);
    }())

    return (
      <Div color={'red'}>
        <p>THE MAIN</p>
      </Div>
    );
  }
}

export default Main;
