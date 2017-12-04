// @flow

import React from 'react';
import { Container } from 'semantic-ui-react';
import HelloButton from './containers/hello-button';
import Message from './containers/message';
import { APP_NAME } from '../shared/config';

const App = () =>
  (
    <Container>
      <h1>{APP_NAME}</h1>
      <Message />
      <HelloButton />
    </Container>
  );

export default App;
