import React, { Component } from 'react';

class Landing extends Component{

	render() {

		return (
	
     <div>

    <div className="jumbotron text-center">
        <h1><span className="fa fa-lock"></span> Node Authentication</h1>

        <p>Login or Register with:</p>

        <a href="/login" className="btn btn-default"><span className="fa fa-user"></span> Local Login</a>
        <a href="/signup" className="btn btn-default"><span className="fa fa-user"></span> Local Signup</a>
    </div>

</div>
  
        
		        );
	}
}
export default Landing;