import { combineReducers } from 'redux';
import { authentication } from '../components/login/store/reducers';
import { registration } from '../components/registration/store/reducers';
// import { users } from './users.reducer';
import { alert } from '../components/alerts/reducers';

const rootReducer = combineReducers({
  authentication,
  registration,
  // users,
  alert
});

export default rootReducer;
