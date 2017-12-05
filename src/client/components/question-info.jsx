// @flow

import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import CreateFaqForm from '../containers/create-form';

export default class QuestionInfo extends Component {
  render() {
    return (
      <Segment className="faq-segment">
        <CreateFaqForm title="What are our HR policies" answer="Check out this link for our policies." />
        <Segment className="utterances">
          <label> Search Query Variations for ElasticSearch</label>
          <ol>
            <li>Show me our HR policies</li>
            <li>Alorica HR policy</li>
          </ol>
        </Segment>
      </Segment>
    );
  }
}