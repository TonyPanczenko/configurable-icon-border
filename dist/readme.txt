1. To preview the component: 
	View the demo site at ./demo site/dist or 
	run "npm install && npm run serve" at ./demo site/development.

2. To include the component in a Vue.js project:
	Copy the IconBorder folder from ./component/for vue projects.
	Add any project dependencies from package.json file.

	Include the component in a normal way - either by registering
	it globally with App.component() or locally in instance options.
	Then it can be used in an HTML template in the following way:

	<icon-border :complete="true" :animate="true" :improvements="['Plastic', 'Fairness', 'Time']">
  		<img src="./assets/default.png" alt="A default test image">
	</icon-border>

3. To include the component in a non-Vue.js project:
	In addition to steps in point 2, every usage needs to be wrapped
	in a Vue app root instance.
	Then props cannot be set in markup / template and can be set
	programmatically instead, directly on the Vue app instance.
	
	import { createApp } from "vue";
	import App from "yourpath/IconBorder/App.vue";
	const compInstance = createApp(App).mount("#componentId");
	const compInstance2 = createApp(App).mount("#componentId2");
	const compInstance3 = createApp(App).mount("#componentId3");

	compInstance.$data.animate = true;