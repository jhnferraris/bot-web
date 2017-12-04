import React, { Component } from 'react';
import { Button, Form, Select, TextArea } from 'semantic-ui-react';

const options = [
  { key: 'hr', text: 'Human Resource', value: 'hr' },
  { key: 'ops', text: 'Operations', value: 'ops' },
  { key: 'finance', text: 'Finance', value: 'finances' },
];
export default class CreateFaqForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>FAQ Question Variant </label>
          <input placeholder="title" defaultValue={this.props.title}/>
        </Form.Field>
        <Form.Field>
          <label>FAQ type</label>
          <Select placeholder="Select a type" fluid options={options} />
        </Form.Field>
        <Form.Field>
          <label>Answer: </label>
          <TextArea placeholder="What's the answer?" defaultValue={this.props.answer} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
