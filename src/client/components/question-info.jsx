// @flow

import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import CreateFaqForm from '../containers/create-form';
import _ from 'lodash';

const renderUtterances = utterances => {
  return _.map(utterances, function(item) {
    return (
      <li>{item}</li>
    )
  });
}

export default class QuestionInfo extends Component {
  render() {
    const { answer, utterances } = this.props;
    return (
      <Segment className="faq-segment">
        <CreateFaqForm title="" answer={answer} />
        <Segment className="utterances">
          <label> Search Query Variations for ElasticSearch</label>
          <ol>
            {
              renderUtterances(utterances)
            }
          </ol>
        </Segment>
      </Segment>
    );
  }
}