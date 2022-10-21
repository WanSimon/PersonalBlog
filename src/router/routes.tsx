const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: '@/pages/Login',
    headerRender: false,
    menuRender: false,
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
  },
  {
    name: '用户中心',
    path: '/users',
    routes: [
      {
        name: '用户列表',
        path: '/users/list',
        component: '@/pages/UserList',
      },
      {
        name: '用户详情',
        path: '/users/:id/detail',
        component: '@/pages/UserDetail',
      },
      {
        name: '新增用户',
        path: '/users/form',
        component: '@/pages/UserForm',
      },
    ],
  },
  {
    name: '博客中心',
    path: '/blogs',
    routes: [
      {
        name: '博客列表',
        path: '/blogs/list',
        component: '@/pages/BlogList',
      },
      {
        name: '博客详情',
        path: '/blogs/:id/detail',
        component: '@/pages/BlogDetail',
      },
      {
        name: '新增博客',
        path: '/blogs/form',
        component: '@/pages/BlogForm',
      },
    ],
  },
  {
    name: '权限演示',
    path: '/access',
    component: '@/pages/Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: '@/pages/Table',
  },
  {
    name: 'Protable表格',
    path: '/protable',
    component: '@/pages/Protable',
  },
];

export default routes;
