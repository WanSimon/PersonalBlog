<template>
  <router-view class="view"></router-view>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "App",
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
.view {
  border: red solid 3px;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
