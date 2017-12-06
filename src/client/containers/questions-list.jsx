// @flow

import { connect } from 'react-redux';

import QuestionsList from '../components/questions-list';
import { getQuestions } from '../actions/api/questions';

const mapStateToProps = state => ({
  questions: state.getQuestions.toJS().questions,
});

const mapDispatchToProps = dispatch => ({
  getQuestions: () => { dispatch(getQuestions()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
