<template>
  <div>
    <!-- <div>Welcome to WanSimon</div> -->
    <!-- <slot v-bind:people="people">{{ people.firstName }}</slot> -->
    <!-- <router-link to="/blog">blog</router-link> -->
    <!-- <router-view></router-view> -->
    <div>
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
  </div>
</template>

<script>
// import BlogDetailPage from "./BlogDetailPage.vue";

export default {
  name: "HomePage",
  // components: {
  //   BlogDetailPage,
  // },
};
</script>
