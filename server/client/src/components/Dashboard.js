import React from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import '..//custom.css';
import 'materialize-css/dist/css/materialize.css';
import * as actions from'../actions';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {

	return (
			<div>
		 			Dashboard
		 			<div className="container">
		 			<SurveyList />
		 			</div>
		 			<div className="fixed-action-btn">
		 			<Link to="/survey/new" className="btn-floating btn-large waves-effect waves-light red "><i className="material-icons">add</i></Link>

		 			</div>
		    </div>
		   );
};

export default connect(null, actions) (Dashboard);