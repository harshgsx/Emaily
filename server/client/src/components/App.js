import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from'../actions';

import Header from './Header';
import Landing from  './Landing';
import Dashboard from './Dashboard';
import SurveyNew from'./surveys/SurveyNew';
// const Landing = () => <h2>Landing Page</h2>;
// embedded <SurveytoC />	
class App extends Component {
componentDidMount(){

this.props.fetchUser();

}
render(){
	return (
	        <div>
	      	<BrowserRouter>

	      	<div className="container">
	      	<Header />
	      	<Route exact path="/" component={Landing} />
			<Route exact path="/surveys" component={Dashboard} />
	    	<Route exact path="/survey/new" component={SurveyNew} />
	    	
	      	</div>
	        </BrowserRouter>
	        </div>
	        
           );
	}

};



export default connect(null, actions)(App);