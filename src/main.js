import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import { Tabs, Tab } from "vue3-tabs-component";

createApp(App)
  .component("tabs", Tabs)
  .component("tab", Tab)
  .use(store)
  .use(router)
  .mount("#app");
