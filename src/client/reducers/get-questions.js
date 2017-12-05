// @flow

import Immutable from 'immutable';

import { GET_QUESTIONS } from '../actions/get-questions';

const initialState = Immutable.fromJS({
  questions: [],
});

const questions = [
  {
    "title": "What is AskJosh bot?",
    "answer": "This is our HR bot",
    "utterances": [
      "Who is AskJosh"
    ],
  },
  {
    "title": "What is our HR Policy?",
    "answer": "Check out this link..",
    "utterances": [
      "Give me our HR policies",
      "Alorica HR Policies"
    ]
  },
];

const getQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return state.set('questions', questions)
    default:
      return state
  }
}

export default getQuestionsReducer;