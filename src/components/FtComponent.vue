<!--
 * @Author: coller
 * @Date: 2022-10-21 17:50:53
 * @LastEditTime: 2022-10-21 18:51:44
 * @Desc:  
-->
<script setup>
import { reactive, ref } from "vue";

const locationVisible = ref(false)
const location = reactive({
  lng: "",
  lat: "",
  address: "",
})

const changeLocation = (val) => {
  console.log(val)
}
</script>

<template>
  <el-button @click="locationVisible = true">打开定位</el-button>
  <ft-location
    v-model:visible="locationVisible"
    v-model="location"
    @change="changeLocation"
  />
</template>

<style scoped>
</style>
