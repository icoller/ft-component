/*
 * @Author: coller
 * @Date: 2022-10-21 17:50:53
 * @LastEditTime: 2022-10-25 14:20:26
 * @Desc:
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      // 打包的入口
      entry: "./packages/index.js", // 设置入口文件
      name: "ft-component", // 起个名字，安装、引入用
      fileName: (format) => `ft-component.${format}.js`, // 打包后的文件名
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "element-plus", "axios", "lockr", "pinyin-match"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
          axios: "Axios",
          lockr: "Lockr",
          "pinyin-match": "PinyinMatch",
        },
        assetFileNames: `ft-component.style.css`,
      },
    },
  },
  server: {
    host: "0.0.0.0", //ip地址
    port: 8090, //端口号
    cors: true,
    proxy: {
      "/api": {
        target: "https://api.kuaiqin.com", // 所要代理的目标地址
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
        changeOrigin: true,
      },
    },
  },
});
