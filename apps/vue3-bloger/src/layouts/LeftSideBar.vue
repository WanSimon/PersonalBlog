<template class="template">
  <a-layout class="all">
    <a-layout-header class="header">
      <!-- <div style="background: #fff">123</div> -->
      <!-- <div class="logo" /> -->
      <!-- 用户头像、用户名称、公司logo -->
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" height="90%" style="background: #fff">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                博文管理
              </span>
            </template>
            <a-menu-item key="1"
              ><router-link to="/blogs/list">博文列表</router-link></a-menu-item
            >
            <a-menu-item key="2">
              <router-link to="/blogs/${id}/blog">更新博文</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                用户管理
              </span>
            </template>
            <a-menu-item key=""
              ><router-link to="">用户列表</router-link></a-menu-item
            >
            <a-menu-item key=""
              ><router-link to="">更新用户</router-link></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                标签管理
              </span>
            </template>
            <a-menu-item key=""
              ><router-link to="">标签列表</router-link></a-menu-item
            >
            <a-menu-item key=""
              ><router-link to="">新建标签</router-link></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                评论管理
              </span>
            </template>
            <a-menu-item key=""
              ><router-link to="">评论列表</router-link></a-menu-item
            >
            <a-menu-item key=""
              ><router-link to="">新建评论</router-link></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                用户中心
              </span>
            </template>
            <a-menu-item key=""
              ><router-link to="">个人资料</router-link></a-menu-item
            >
            <a-menu-item key=""
              ><router-link to="">修改资料</router-link></a-menu-item
            >
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <!-- 面包屑 -->
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
  },

  setup() {
    return {
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>
<style>
.all {
  border: skyblue solid 1px;
  margin-top: -60px;
  height: 770px;
  /* padding-top: -60px; */
}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
