import VueRouter from "vue-router";

// import BrightLayout from "../layout/BrightLayout.vue";
// import BlogListPage from "../pages/BlogListPage";
// import App from "../App";
// import UserListPage from "../pages/UserListPage";
// import UserDetailPage from "../pages/UserDetailPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import StudyListPage from "../pages/StudyListPage";
import SecondDay from "../components/SecondDay";
import ThirdDay from "../components/ThirdDay.vue";

const routes = [
  {
    path: "/wan",
    // component:BlogDe
  },
  {
    path: "/blog",
    component: BlogDetailPage,
  },
  {
    path: "/studylist",
    component: StudyListPage,
    children: [
      {
        path: "second",
        component: SecondDay,
      },
      {
        path: "third",
        component: ThirdDay,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
