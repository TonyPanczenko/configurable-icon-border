// jscs: disable
// jshint esversion: 6

import { createApp } from "vue";
import App from "./App.vue";
import IconBorder from "./components/IconBorder/IconBorder.vue";

// const app = createApp(App);
//
// app.component("icon-border", IconBorder);
// app.mount("#app");

createApp(App).component("icon-border", IconBorder).mount("#app");
