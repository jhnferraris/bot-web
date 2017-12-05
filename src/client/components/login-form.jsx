import React, { Component } from 'react';
import { Button, Form, Select, TextArea } from 'semantic-ui-react';

export default class LoginForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username </label>
          <input placeholder="username"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="password"/>
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}
