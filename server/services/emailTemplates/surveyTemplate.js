module.exports = survey => {

	return `

		<html>
		<body>
		<div style = "text-align: center;">
		<h3>Here is the result of your recent survey at Discoverhomes.co.in</h3>
		<p>your input are valuable</p>
		<p>${survey.body}</p>
		<div> Greetings from DiscoverHomes </div>
		<p>${survey.yes}</p>
		<p>${survey.no}</p>
		</body>
		</html>

		


	`;
};