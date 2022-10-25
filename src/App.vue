<template>
  <el-config-provider :locale="elLocale">
    <div id="app">
      <ft-component />
    </div>
  </el-config-provider>
</template>

<script setup>
import { ref, computed } from 'vue'
import FtComponent from './components/FtComponent.vue'
import zhCNLang from 'element-plus/lib/locale/lang/zh-cn'
import enUSLang from 'element-plus/lib/locale/lang/en'

const elLocaleMap = ref({
  'zh': zhCNLang,
  'en': enUSLang,
})

const elLocale = computed(() => {
  let curLocale = localStorage.getItem('lang') || 'zh'
  return elLocaleMap.value[curLocale]
})
</script>
<style lang="scss">
#app {
  height: 100%;
}
</style>