import { createRouter, createWebHashHistory } from "vue-router";
import ArticleList from "../pages/ArticleList.vue";
import UserList from "../pages/UserList.vue";
import BlankPage from "../pages/BlankPage.vue";
import Profile from "../pages/Profile.vue";
import UserForm from "../pages/UserForm.vue";
// import  from "../pages/.vue";

// import  from "../pages/.vue";
// import  from "../pages/.vue";
// import  from "../pages/.vue";
// import  from "../pages/.vue";
const routes = [
  {
    path: "/",
    component: ArticleList,
    children: [
      {
        path: "users",
        component: BlankPage,
        children: [
          { path: "list", component: UserList },
          { path: ":id/detail", component: Profile },
          {
            path: ":id/form",
            component: UserForm,
          },
        ],
      },
      {
        path: "articles",
        component: "",
        children: [
          { path: "list", component: "" },
          { path: ":id/detail", component: "" },
          { path: ":id/form", component: "" },
        ],
      },
      {
        path: "labels",
        component: "",
        children: [
          { path: "", component: "" },
          { path: "", component: "" },
          { path: "", component: "" },
        ],
      },
    ],
  },
  //   { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
