// @flow

import Immutable from 'immutable';
import { QUESTIONS_QUERY, QUESTIONS_QUERY_FAILED, QUESTIONS_QUERY_SUCCESS} from '../constants/question-action-types';
import { getQuestions } from '../actions/api/questions';

const initialState = Immutable.Map({
  questions: [],
  error: null,
});

const getQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_QUERY:
      getQuestions();
      return state;
    case QUESTIONS_QUERY_SUCCESS:
      return state.merge({
        questions: action.payload,
      });
    case QUESTIONS_QUERY_FAILED:
      return state.merge({
        error: action.error,
      });
    default:
      return state;
  }
};

export default getQuestionsReducer;
