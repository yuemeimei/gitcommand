import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'lib-flexible/flexible'


Vue.config.productionTip = false;
console.log(111)
console.log(2222)
console.log("我是feature分支")
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
