/*
 * @Author: coller
 * @Date: 2022-10-21 17:50:53
 * @LastEditTime: 2022-10-21 19:38:23
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
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      // 打包的入口
      entry: "./packages/index.js",
      name: "ft-components",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "element-plus", "axios", "lockr", "pinyin-match"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "vue",
          "element-plus": "ElementPlus",
          axios: "axios",
          lockr: "lockr",
        },
        assetFileNames: `ft-components.style.css`,
      },
    },
  },
});
