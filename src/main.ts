import { createApp } from 'vue';
import { setupIonic, setupAssets, setupLockVerticalScreen, setupStatusBar } from './plugins';
import { setupRouter } from './router';
import App from './App.vue';

function setupPlugins() {
  // 引入静态资源依赖(js,css)
  setupAssets();

  // 禁用横屏
  setupLockVerticalScreen();

  // 沉浸状态栏
  setupStatusBar();
}

async function setupApp() {
  const app = createApp(App);

  // 挂载ionic框架
  setupIonic(app);

  // 挂载路由
  await setupRouter(app);

  // 路由准备就绪后挂载APP实例
  app.mount('#app');
}

setupPlugins();

setupApp();
