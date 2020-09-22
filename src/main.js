import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebookF, faPinterestP, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons/";

library.add(faFacebookF, faPinterestP, faInstagram, faTwitter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
