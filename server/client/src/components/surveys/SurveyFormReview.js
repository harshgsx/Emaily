import React from 'react';
import {connect} from 'react-redux';
import formFeilds from './formFields';
import _ from 'lodash';
import {withRouter } from 'react-router-dom';
import * as actions from '../../actions'

const SurveyReview = ({ onCancel,formValues, submitSurvey,history }) => {
const reviewFields = _.map(formFeilds, ({name,label}) => {
return (
	<div key={name}> 
	<label>{label}</label>
	<div>
	{formValues[name]}
	</div>
	</div>
	);

});

console.log(formValues);
	return (
			<div>
			<h5>please confirm your entries</h5>

			{reviewFields}
			<button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back
			</button>
			<button onClick={() => submitSurvey(formValues,history)} className="green white-text btn-flat right">Send Survey
			<i className="material-icons right">email</i>
			</button>
			</div>
		);
};

function mapStatesToProps(state)
{
	
	return{ formValues: state.form.surveyForm.values };
}		


export default connect(mapStatesToProps,actions) (withRouter(SurveyReview));
