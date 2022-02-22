import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/reset.scss';
import "tailwindcss/tailwind.css"
import lazyPlugin from 'vue3-lazy';

//iconFont
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3001948_pwm2cwtevsl.js',
});

const app = createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    loading: require('@/assets/image/lazy-load/loading.gif'), // 图片加载时默认图片
  })
  .component('IconFont', IconFont)
  .mount('#app')
