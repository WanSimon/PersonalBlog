<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <User></User> -->
    <HomePage>
      <!-- <template v-slot="{ people }"> {{ people.firstName }} </template> -->
      <!-- <div>WanSimon</div> -->
      <!-- <span>wanddd</span> -->
    </HomePage>
    <label for="proto">
      <input type="checkbox" id="proto" v-model="isAgree" />同意协议
    </label>
    <input type="checkbox" value="basketball" v-model="hobbies" />篮球
    <input type="checkbox" value="football" v-model="hobbies" />足球
    <input type="checkbox" value="pinpang" v-model="hobbies" />
    <br />
    {{ hobbies }}

    <select name="myfruits" v-model="fruits" multiple>
      <option value="apple">苹果</option>
      <option value="orange">橘子</option>
      <option value="liulian">榴莲</option>
    </select>

    <input type="number" v-model.number="age" />
    <h2>{{ age }}-{{ typeof age }}</h2>
    <!-- <router-view></router-view> -->
    <!-- <SecondDay></SecondDay> -->
    <!-- <a-button type="primary">Primary</a-button> -->
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
  data() {
    return {
      isAgree: false,
      hobbies: [],
      fruits: [],
      age: 0,
      people: {
        firstName: "Wan",
        lastName: "Simon",
      },
    };
  },
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
