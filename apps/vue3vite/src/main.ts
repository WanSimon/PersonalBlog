import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./style.css";
import "element-plus/dist/index.css";
import App from "./App.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import router from "./router/index";

const app = createApp(App);

app.use(router);

app.use(ElementPlus);

app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");
