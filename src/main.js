import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(store)
  .component("Button", Button)
  .component("InputText", InputText)
  .mount("#app");
