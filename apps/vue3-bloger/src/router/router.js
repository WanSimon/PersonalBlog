import HomePage from "../pages/HomePage.vue";
import StudyListPage from "../pages/StudyListPage.vue";
import LeftSideBar from "../layouts/LeftSideBar.vue";
// import VueRouter from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: LeftSideBar,
    children: [
      { path: "/home", component: HomePage },
      {
        path: "/study",
        component: StudyListPage,
      },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
