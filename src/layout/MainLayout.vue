<template>
  <el-container>
    <el-aside>侧边栏</el-aside>
    <el-container>
      <el-header><navbar /></el-header>
      <el-main>
        内容区
        <ArticleList />
        <RouterView />
      </el-main>
      <el-footer>
        <div class="copyright">
          Copyright © 2016-2018 / noinf / All Rights Reserved. /
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33022502000082"
          >
            <img src="/public_regist.png" />浙公网安备33022502000082号</a
          >
          /
          <a target="_blank" href="http://www.miitbeian.gov.cn/">浙ICP备15002704号-1</a>
        </div>
      </el-footer>
    </el-container>
    <el-aside>右侧边栏</el-aside>
  </el-container>
</template>
<script setup>
import ArticleList from '@/components/ArticleList.vue'
import navbar from '@/components/NavBar.vue'
</script>
<style>
:root {
  --el-aside-width: 200px;
  --el-header-height: 60px;
}
.el-container {
  display: flex;
  height: 100vh; /* 让容器填满父元素高度 */
  width: 100%;
}
.el-aside {
  width: var(--el-aside-width); /* 侧边栏宽度自定义 */
  background-color: rgb(149, 149, 230);
}

.el-header {
  height: var(--el-header-height);
  background-color: rgb(230, 149, 226);
  padding: 0% !important;
}

.el-footer {
  white-space: normal; /* 允许文本换行 */
  word-break: break-all; /* 在单词中间换行，如果需要 */
  height: 30px !important;
  background-color: rgb(130, 160, 141);
}
@media (max-width: 767px) {
  /* 手机端样式 */
  .el-aside {
    display: none;
  }
}
</style>
