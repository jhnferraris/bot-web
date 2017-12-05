// @flow

import Immutable from 'immutable';

import { GET_QUESTIONS } from '../actions/get-questions';

const initialState = Immutable.fromJS({
  questions: [],
});

const questions = [
  {
    "title": "What is AskJosh bot?"
  },
  {
    "title": "What is our HR Policy?"
  },
];

const getQuestionsReducer = (state = initialState, action) => {
  // console.log('Action executed: ' + action.type)
  // switch (action.type) {
  //   case GET_QUESTIONS:
  //     return state.set('questions', questions)
  //   default:
  //     return state
  // }

  // Do stub for now. I can't seem to get this redux action to work.
  return state.set('questions', questions);
}

export default getQuestionsReducer;