import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducers';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  surveys: surveysReducer
});
