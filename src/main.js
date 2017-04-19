import Vue from "vue";
import App from "./components/App.vue";
import VueRouter from "vue-router";
import {firebaseApp} from "./firebaseApp";
import store from "./store/index.js";

Vue.use(VueRouter);

import Dashboard from "./components/Dashboard.vue";
import SignIn from "./components/SignIn.vue";
import SignUp from './components/SignUp.vue';
console.log("in main");

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/dashboard", component: Dashboard},
    {path: "/signin", component: SignIn},
    {path: "/signup", component: SignUp}
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  console.log("in main firebase auth");
  if(user){
    store.dispatch("signIn", user)
    router.push("/dashboard");  //push navigates to a new page, keeping history intact
  }
  else{
     router.replace("signin");   //whereas replace navigates to new page and wipes history
  }
})

new Vue({
  el : "#app",
  router,
  store,
  render : h => h(App)
})