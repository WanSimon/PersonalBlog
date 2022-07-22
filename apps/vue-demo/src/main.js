import Vue from "vue";
import App from "./App.vue";
import router from "./config/routes";
import VueRouter from "vue-router";
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.directive("focus", {
//   inserted: function (el) {
//     el.focus();
//   },
// });
// Vue.directive("demo", {
//   bind: function (el, binding, vnode) {
//     var s = JSON.stringify;
//     el.innerHTML =
//       "name: " +
//       s(binding.name) +
//       "<br>" +
//       "value: " +
//       s(binding.value) +
//       "<br>" +
//       "expression: " +
//       s(binding.expression) +
//       "<br>" +
//       "argument: " +
//       s(binding.arg) +
//       "<br>" +
//       "modifiers: " +
//       s(binding.modifiers) +
//       "<br>" +
//       "vnode keys: " +
//       Object.keys(vnode).join(", ");
//   },
// });

// Vue.component("anchored-heading", {
//   render: function (createElement) {
//     return createElement("h" + this.level, this.$slots.default);
//   },
//   props: {
//     level: {
//       type: Number,
//       required: true,
//     },
//   },
// });

// Vue.mixin({
//   created: function () {
//     const myOption = this.$option;
//     console.log(this);
//     if (myOption) {
//       console.log(myOption);
//     }
//     console.log(11111);
//   },
// });
// Vue.use(Antd);
new Vue({
  myOption: "hello",
  router,
  render: (h) => h(App),
})
  // .use(Antd)
  .$mount("#app");

router.push("/user");
