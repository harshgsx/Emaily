import React,{ Component }from 'react';
import * as Survey from "survey-react";
import '..//custom.css';
import 'materialize-css/dist/css/materialize.css';

class SurveytoC extends Component 
{

 surveyJSON =
  { 
  questions: [
        {
            type: "text",
            name: "name",
            title: "Your name:"
        }, {
            type: "text",
            name: "email",
            title: "Your e-mail"
        }, {
            type: "checkbox",
            name: "car",
            title: "What car are you driving?",
            isRequired: true,
            colCount: 4,
            choices: [
                "None",
                "Ford",
                "Vauxhall",
                "Volkswagen",
                "Nissan",
                "Audi",
                "Mercedes-Benz",
                "BMW",
                "Peugeot",
                "Toyota",
                "Citroen"
            ]
        }
    ]
};

onComplete(result) {
	console.log(result);
}

 render() 
 {
 	
  Survey.StylesManager.applyTheme("darkblue");
 	//Survey.Survey.cssType = "bootstrap";
  var model = new Survey.Model(this.surveyJSON);
var myCss = {
    matrix: {
        root: "table table-striped"
    },
    navigationButton: "button btn-lg"
};
 	return(
  			
        <div className="ad">
        <div id="surveyElement">

  			<Survey.Survey model={model} onComplete={this.onComplete}/>

        </div>
        </div>
  		);
 }

 }

  export default SurveytoC;