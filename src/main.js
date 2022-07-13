import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import firebase from "firebase";
// import { appFirestore } from "./api/index";

// firebase(appFirestore);

createApp(App).use(store).use(router).mount("#app");
