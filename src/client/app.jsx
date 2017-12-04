// @flow

import React, { Component } from 'react';
import { Container, Segment, Accordion, Icon } from 'semantic-ui-react';
import CreateFaqForm from './containers/create-form';
import { APP_NAME } from '../shared/config';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { activeIndex: 0 };
  }

  handleClick(e, titleProps){
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
  
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Container>
        <h1>{APP_NAME}</h1>
        <Accordion fluid styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
            <Icon name="dropdown" />
            What is AskJosh Bot?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Segment className="faq-segment">
              <CreateFaqForm title="What is AskJosh Bot?" answer="AskJosh is our HR Bot." />
              <Segment className="utterances">
                <label> Search Query Variations for ElasticSearch</label>
                <ol>
                  <li>Who is AskJosh?</li>
                  <li>AskJosh Alorica</li>
                </ol>
              </Segment>
            </Segment>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick.bind(this)}>
            <Icon name="dropdown" />
            What are our HR policies?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Segment className="faq-segment">
              <CreateFaqForm title="What are our HR policies" answer="Check out this link for our policies." />
              <Segment className="utterances">
                <label> Search Query Variations for ElasticSearch</label>
                <ol>
                  <li>Show me our HR policies</li>
                  <li>Alorica HR pol</li>
                </ol>
              </Segment>
            </Segment>
          </Accordion.Content>
        </Accordion>
      </Container>
    );
  }
}
