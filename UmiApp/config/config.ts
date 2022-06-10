import { defineConfig } from 'umi';

export default defineConfig({
  // routes: [
  //   { path: '/', component: './index' },
  //   { path: '/dndpg', component: './dndpg'},
  //   {path: '/refs', component: './refsForward'},
  // ],
  //约定路由吧，懒得写
  antd: {},
  dva: {},
  request: {},
  proxy: {
    "/ptapi/": {
      target: "http://172.26.136.102:8100/",
      changeOrigin: true,
      secure: false,
      // pathRewrite: { '^/ptapi': '/testapi' },
    },
  },
});
