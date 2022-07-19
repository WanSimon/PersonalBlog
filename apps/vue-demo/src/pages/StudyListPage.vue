<template>
  <div>
    <router-link to="/studylist/second">第二天</router-link>
    <br />
    <router-link to="/studylist/third">第三天</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "StudyListPage",
};
</script>
