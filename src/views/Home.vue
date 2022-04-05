<template>
  <div class="main">
    <h1 class="title">Home Page</h1>
    <el-button @click="onClick">Click Me</el-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core"
import { ElMessage } from "element-plus"

onMounted(() => {
  console.log("Home Page")
})

function onClick() {
  ElMessage({
    message: 'This is a messsage!',
    type: 'success',
  })
}
</script>

<style scoped lang="scss">
.main {
  text-align: center;
  .title {
    color: green;
  }
}
</style>