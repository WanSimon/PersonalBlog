<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <a-button type="primary">Primary Button</a-button>
  <a-button @click="goToListPage">Default Button</a-button> -->
  <router-view></router-view>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  setup() {
    const router = useRouter();
    const goToListPage = () => router.push("/study");
    return {
      goToListPage,
    };
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
