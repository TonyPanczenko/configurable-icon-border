1. To preview the component:
	View the demo site at production branch or
	run "npm install && npm run serve" at development

2. To include the component in a Vue.js project:
	Copy the IconBorder folder from ./component/for vue projects.
	Add any project dependencies from package.json file.

	Include the component in a normal way - either by registering
	it globally with App.component() or locally in instance options.
	Then it can be used in an HTML template in the following way:

	<icon-border :complete="true" :animate="true" :improvements="['Plastic', 'Fairness', 'Time']">
  		<img src="./assets/default.png" alt="A default test image">
	</icon-border>
