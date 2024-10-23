<template>
  <el-container>
    <el-aside>
      <DesignerPanel />
      <TopicCard title="技术栈 & 债" :topicList="topicList" />
      <TopicCard title="推荐链接" :topicList="['都是大神']" />
    </el-aside>
    <el-container>
      <el-header><navbar /></el-header>
      <el-main>
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
    <el-aside>
      <StatusTab style="max-height: 50%" />
      <TopicCard title="专题" :topicList="['Django博客开发', 'Rust']"
    /></el-aside>
  </el-container>
</template>
<script setup>
import ArticleList from '@/components/ArticleList.vue'
import DesignerPanel from '@/components/DesignerPanel.vue'
import navbar from '@/components/NavBar.vue'
import StatusTab from '@/components/StatusTab.vue'
import TopicCard from '@/components/TopicCard.vue'

const topicList = ['c', 'rust', 'linux', '嵌入式开发', 'python', 'Django', '前端', '数据库', '硬件']
</script>
<style>
:root {
  --el-aside-width: 250px;
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
