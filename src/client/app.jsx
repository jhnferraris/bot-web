// @flow

import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import QuestionsList from './containers/questions-list';

import { APP_NAME } from '../shared/config';

export default class App extends Component {


  render() {

    return (
      <Container>
        <h1>{APP_NAME}</h1>
        <QuestionsList />
      </Container>
    );
  }
}
