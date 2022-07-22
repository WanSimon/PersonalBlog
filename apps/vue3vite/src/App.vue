<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <el-container class="container">
    <el-header style="border: 2px red solid">Header</el-header>
    <el-container>
      <el-aside class="aside">
        <!-- <router-link to="/user/list"> 博客列表</router-link> -->
        <el-scrollbar>
          <el-menu>
            <el-sub-menu index="article">
              <template #title>
                <!-- <el-icon><message /></el-icon> -->
                文章管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="ArticleList">
                  <router-link to="/">文章列表</router-link>
                </el-menu-item>
                <el-menu-item index="ArticleCreated"> 创建文章 </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="blogger">
              <template #title>
                <!-- <el-icon><setting /></el-icon> -->
                博客管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="BloggerList"
                  ><router-link to="/users/list"> 博客列表</router-link>
                </el-menu-item>
                <el-menu-item index="BloggerCreated">
                  <router-link to="/users"> 创建博客</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="label">
              <template #title>
                <!-- <el-icon><message /></el-icon> -->
                标注管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="LabelList"> 标注列表 </el-menu-item>
                <el-menu-item index="LabelCreated"> 创建标注 </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="own">
              <template #title>
                <!-- <el-icon><message /></el-icon> -->
                个人中心
              </template>
              <el-menu-item-group>
                <el-menu-item index="UpdateUserInfo"> 更新 </el-menu-item>
                <el-menu-item index="UpdatePassword"> 密码 </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main><router-view></router-view> </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
.container {
  border: 2px solid red;
  width: 100%;
  height: 100%;
}
.aside {
  border: 2px solid skyblue;
}
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
