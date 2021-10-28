import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: './index' }],

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
