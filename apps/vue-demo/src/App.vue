<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <User></User> -->
    <HomePage></HomePage>
    <router-view></router-view>
    <SecondDay></SecondDay>
    <a-button type="primary">Primary</a-button>
    <!-- <router-link to="/blog">blog</router-link> -->
    <br />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import User from "./components/User.vue";
import HomePage from "./pages/Home.vue";
export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
