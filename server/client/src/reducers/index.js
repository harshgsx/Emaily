import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysRducer from './surveysReducer';

export default combineReducers ({

	auth: authReducer,
	form: reduxForm,
	surveys: surveysRducer
    
});