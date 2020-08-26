import { combineReducers } from 'redux';
import { authentication } from '../components/login/store/reducers';
import { registration } from '../components/registration/store/reducers';
import { alert } from '../components/alerts/reducers';
import { quizReducer } from '../components/quiz/store/reducers'

const rootReducer = combineReducers({
  authentication,
  registration,
  quizReducer,
  alert
});

export default rootReducer;
