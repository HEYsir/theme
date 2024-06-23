<template>
  <div style="width: 100%">
    <el-button v-if="isMobile" type="primary" @click="toggleSidebar" round>菜单</el-button>
    <el-drawer v-model="drawerVisible" direction="ltr" size="100px" :show-close="false">
      <el-menu mode="vertical" :default-active="activeIndex" router @select="mobileMenuClick">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/tech">技术</el-menu-item>
        <el-menu-item index="/note">随笔</el-menu-item>
        <el-menu-item index="/read">书单</el-menu-item>
        <el-menu-item index="/todo">TODO</el-menu-item>
        <el-menu-item index="/prj">项目</el-menu-item>
        <el-menu-item index="/about">关于我</el-menu-item>
      </el-menu>
    </el-drawer>
    <el-header class="pc-only">
      <el-menu :ellipsis="false" :default-active="activeIndex" mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/tech">技术</el-menu-item>
        <el-menu-item index="/note">随笔</el-menu-item>
        <el-menu-item index="/read">书单</el-menu-item>
        <el-menu-item index="/todo">TODO</el-menu-item>
        <el-menu-item index="/prj">项目</el-menu-item>
        <el-menu-item index="/about">关于我</el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
import { ref } from 'vue'

const isMobile = ref(useWindowSize().width.value <= 767)
const drawerVisible = ref(false)
const activeIndex = ref('/')
const toggleSidebar = () => {
  drawerVisible.value = !drawerVisible.value
}
const mobileMenuClick = () => {
  drawerVisible.value = false
}
</script>

<style scoped>
::v-deep .el-drawer__body {
  padding: 0px !important;
}
.pc-only {
  display: none;
}
@media (min-width: 768px) {
  .pc-only {
    display: block;
    width: 100%;
  }
}
</style>
