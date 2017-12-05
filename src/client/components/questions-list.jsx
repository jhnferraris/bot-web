// @flow

import React, { Component } from 'react';
import { Segment, Accordion, Icon } from 'semantic-ui-react';
import QuestionInfo from '../containers/question-info';
import _ from 'lodash';

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

  generateAccordionItems(questions, activeIndex, handleClick) {
    return _.map(questions, function(item, index) {
      return (
        <div>
          <Accordion.Title key={`question-${index}`} active={activeIndex === index} index={index} onClick={handleClick}>
            <Icon name="dropdown" />
            { item.title }
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <QuestionInfo />
          </Accordion.Content>
        </div>
      );
    });
  }
  render() {
    const { questions } = this.props;
    const { activeIndex } = this.state;
    return (
      <Accordion fluid styled>
        {this.generateAccordionItems(questions, activeIndex, this.handleClick.bind(this))}
      </Accordion>
    );
  }
}