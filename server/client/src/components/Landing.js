import React from 'react';
//import ReactDOM from 'react-dom';
//import * as Survey from "survey-react";

const Landing = () => {


		return (
	
    <div style={{  textAlign: 'center' }}>
 
        <h1>Emaily</h1>
        <p>Collect Feedback from your user</p>
        <h1> Hello World </h1>
    </div>

        
		      );
}

// var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
//   { name:"page1", questions: [ 
//       { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
//       { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
//    ]},
//   { name: "page2", questions: [
//     { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
//     { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
//   { name: "page3",questions: [
//     { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
//  ]
// };

// var sendDataToServer;

 // ReactDOM.render(
 //  <Survey.Survey json={surveyJSON} onComplete={sendDataToServer}/>,
 //  document.getElementById("surveyContainer"));

export default Landing;