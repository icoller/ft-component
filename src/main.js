/*
 * @Author: coller
 * @Date: 2022-10-25 09:23:02
 * @LastEditTime: 2022-10-26 12:15:54
 * @Desc:
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 列表选择 用于选择人员
// import { RecycleScroller } from "vue-virtual-scroller";
// import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

// import FT from "../dist/ft-component.es";
// import "../dist/ft-component.style.css";

const app = createApp(App);
app.use(ElementPlus);
// app.component("RecycleScroller", RecycleScroller);
// app.use(FT);
app.mount("#app");
