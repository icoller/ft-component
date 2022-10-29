<!--
 * @Author: coller
 * @Date: 2022-10-21 17:50:53
 * @LastEditTime: 2022-10-29 18:17:10
 * @Desc:  
-->
<script setup>
import { reactive, ref, shallowRef, watch } from "vue";

import FtLocation from "../../packages/FtLocation/index.vue";

import FtDistpicker from "../../packages/FtDistpicker/index.vue";

import FtSelectEmpl from "../../packages/FtSelectEmpl/index.vue";

import FtSelectDept from "../../packages/FtSelectDept/index.vue";

import FtSelectUser from "../../packages/FtSelectUser/index.vue";


const location = reactive({
  lng: "",
  lat: "",
  address: "",
  visible: false
})

const position = reactive({
  province: "",
  city: "",
  district: "",
  street: "",
  address: ""
})

const positionInput = ref("请选择")

const buttonRef = ref()

const changeLocation = (val) => {
  console.log(val)
}

const positionStr = shallowRef({})

const change = (val) => {
  console.log(positionStr.value, "positionStr")
  console.log(positionVisible.value, "positionVisible")
}

const closeFun = () => {
  console.log("xxxxx")
}
const positionVisible = ref(false)
const emplVisible = ref(false)

const userid = ref(10)
const userids = ref([])

function handleChangeEvent (vval) {
  console.log(vval)
  console.log(userids.value)
}

const deptList = reactive([
  {
    "id": 1,
    "name": "全公司",
    "parentId": 0,
    "ownerUserId": 0,
    "children": [
      {
        "id": 5,
        "name": "AAA",
        "parentId": 1,
        "ownerUserId": 1000001,
        "children": null,
        "createUserId": 1000001,
        "updateUserId": 1000001,
        "createdAt": 1665454545084,
        "updatedAt": 1665458176989
      },
      {
        "id": 3,
        "name": "呃2呜呜呜",
        "parentId": 1,
        "ownerUserId": 1000001,
        "children": null,
        "createUserId": 1000001,
        "updateUserId": 1000001,
        "createdAt": 1665422539401,
        "updatedAt": 1665459122536
      },
      {
        "id": 4,
        "name": "呃呃呃2我我",
        "parentId": 1,
        "ownerUserId": 1000001,
        "children": [
          {
            "id": 7,
            "name": "www23",
            "parentId": 4,
            "ownerUserId": 1000003,
            "children": null,
            "createUserId": 1000001,
            "updateUserId": 1000001,
            "createdAt": 1665459220756,
            "updatedAt": 1665461411538
          }
        ],
        "createUserId": 1000001,
        "updateUserId": 1000001,
        "createdAt": 1665454438534,
        "updatedAt": 1665459128851
      },
      {
        "id": 2,
        "name": "地摊委员会",
        "parentId": 1,
        "ownerUserId": 1000001,
        "children": [
          {
            "id": 9,
            "name": "www2",
            "parentId": 2,
            "ownerUserId": 1000003,
            "children": null,
            "createUserId": 1000001,
            "updateUserId": 1000001,
            "createdAt": 1665460895771,
            "updatedAt": 1665461127062
          }
        ],
        "createUserId": 1000001,
        "updateUserId": 1000001,
        "createdAt": 1661424010972,
        "updatedAt": 1665460056629
      },
      {
        "id": 6,
        "name": "www1",
        "parentId": 1,
        "ownerUserId": 1000002,
        "children": null,
        "createUserId": 1000001,
        "updateUserId": 1000001,
        "createdAt": 1665459165344,
        "updatedAt": 1665460857290
      },
      {
        "id": 8,
        "name": "www5",
        "parentId": 1,
        "ownerUserId": 1000001,
        "children": null,
        "createUserId": 1000001,
        "updateUserId": 1000001,
        "createdAt": 1665459804673,
        "updatedAt": 1665461278212
      },
      {
        "id": 10,
        "name": "33333",
        "parentId": 1,
        "ownerUserId": 0,
        "children": null,
        "createUserId": 1000001,
        "updateUserId": 1000001,
        "createdAt": 1665796514249,
        "updatedAt": 1665796514249
      }
    ],
    "createUserId": 0,
    "updateUserId": 0,
    "createdAt": 1652854410363,
    "updatedAt": 1652854410363
  }
])

const emplList = reactive([
  {
    "id": 1000003,
    "username": "18676353131",
    "isSetPass": 0,
    "salt": "pvu580",
    "avatar": "",
    "realname": "可乐个个",
    "num": "",
    "email": "colohu@icloud.com",
    "mobile": "18676353131",
    "sex": "男",
    "deptId": 1,
    "deptName": "",
    "roleIds": [
      2
    ],
    "post": "",
    "status": 2,
    "parentId": 1000001,
    "parentName": "",
    "typeId": 0,
    "createdAt": 1655197889193,
    "updatedAt": 1655197889193
  },
  {
    "id": 1000002,
    "username": "18676353132",
    "isSetPass": 0,
    "salt": "pvu580",
    "avatar": "",
    "realname": "可乐先生",
    "num": "",
    "email": "olddogs@foxmail.com",
    "mobile": "18676353132",
    "sex": "男",
    "deptId": 1,
    "deptName": "",
    "roleIds": [
      2
    ],
    "post": "ces",
    "status": 2,
    "parentId": 1000001,
    "parentName": "",
    "typeId": 0,
    "createdAt": 1655195781796,
    "updatedAt": 1655195781796
  },
  {
    "id": 1000001,
    "username": "18676353135",
    "isSetPass": 0,
    "salt": "mt5y17",
    "avatar": "",
    "realname": "胡先生",
    "num": "",
    "email": "coller@88.com",
    "mobile": "18676353135",
    "sex": "男",
    "deptId": 1,
    "deptName": "",
    "roleIds": [
      0
    ],
    "post": "ceeo",
    "status": 1,
    "parentId": 1000001,
    "parentName": "",
    "typeId": 1,
    "createdAt": 1655189482245,
    "updatedAt": 1661477905674
  }
])

function inputClick () {
  visible.value = true
}
const visible = ref(false)



</script>

<template>
  <div class="top"></div>
  <el-input class="left">
    <template #prefix>
      <ft-location
        v-model="location"
        v-model:visible="positionVisible"
        placeholder="positionInput"
        @change="changeLocation"
      />
    </template>
  </el-input>

  <el-input>
    <template #prefix>
      <ft-distpicker
        v-model="positionStr"
        v-model:visible="positionVisible"
        @change="change"
        :placeholder="positionInput"
      ></ft-distpicker>
    </template>
  </el-input>
  <el-input :style="{'margin-left':'300px'}"><template #prefix>
      <ft-select-empl
        v-model="userid"
        v-model:visible="emplVisible"
        :dept-list="deptList"
        placeholder="sssss"
        @change="handleChangeEvent"
      />
    </template>
  </el-input>
  <div class="top"></div>
  <ft-select-user
    v-model="userids"
    :dept-list="deptList"
    :show-type="0"
    :empl-list="emplList"
    placeholder="请选择"
    @change="handleChangeEvent"
  />
</template>

<style scoped lang="scss">
.top {
  margin-top: 100px;
}
.left {
  margin-left: 300px;
}
</style>
