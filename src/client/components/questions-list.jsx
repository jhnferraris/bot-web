// @flow

import React, { Component } from 'react';
import { Segment, Accordion, Icon } from 'semantic-ui-react';
import QuestionInfo from '../containers/question-info';

export default class QuestionsList extends Component {
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
      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
          <Icon name="dropdown" />
          What is AskJosh Bot?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <QuestionInfo />
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick.bind(this)}>
          <Icon name="dropdown" />
          What are our HR policies?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <QuestionInfo />
        </Accordion.Content>
      </Accordion>
    );
  }
}