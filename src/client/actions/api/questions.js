import { CALL_API } from 'redux-api-middleware';
import { QUESTIONS_QUERY_SUCCESS, QUESTIONS_QUERY_FAILED, QUESTIONS_QUERY } from '../../constants/question-action-types';

export function getQuestions() {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:8000/api/questions',
      method: 'GET',
      types: [
        QUESTIONS_QUERY, QUESTIONS_QUERY_SUCCESS, QUESTIONS_QUERY_FAILED,
      ],
    },
  };
}
