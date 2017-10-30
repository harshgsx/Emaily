import React, { Component } from 'react';

class Landing extends Component{

	render() {

		return (
	
     <div class="container">

    <div class="jumbotron text-center">
        <h1><span class="fa fa-lock"></span> Node Authentication</h1>

        <p>Login or Register with:</p>

        <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
        <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
    </div>

</div>
  
        
		        );
	}
}
export default Landing;