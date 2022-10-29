import { reactive } from "vue";
import { get } from "./index";

import enLocaleElement from "element-plus/lib/locale/lang/en";
import zhLocaleElement from "element-plus/lib/locale/lang/zh-cn";

import enLocale from "@/lang/en";
import zhLocale from "@/lang/zh";

let locale = reactive({
  lang: localStorage.getItem("lang") || "zh",
});

const langResources = {
  en: {
    ...enLocaleElement,
    ...enLocale,
  },

  zh: {
    ...zhLocaleElement,
    ...zhLocale,
  },
};

function createI18n(options) {
  return {
    messages: options.messages,

    $st(path, ...args) {
      const message = get(this.messages[locale.lang], path);
      return typeof message === "function"
        ? message(...args)
        : message !== null
        ? message
        : path;
    },
  };
}

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "zh",
  messages: langResources,
});

const t = function (key) {
  return i18n.$st(key);
};

export { t };
