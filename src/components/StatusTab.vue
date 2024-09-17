<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <font-awesome-icon icon="fa-solid fa-list" />
          <span>近期发布</span>
        </span>
      </template>
      <StatusItem :statusList="articls['recents']" />
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <font-awesome-icon icon="fa-solid fa-fire" />
          <span>热门文章</span>
        </span>
      </template>
      <StatusItem :statusList="articls['hotarticle']" />
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <font-awesome-icon icon="fa-solid fa-comment" />
          <span>近期评论</span>
        </span>
      </template>
      <StatusItem :statusList="articls['recent_guess']" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import StatusItem from './StatusItem.vue'

StatusItem
const articls = {
  recents: [
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/25/',
      title: '云服务ECS无法访问变现云盘读写BPS/IOPS异常问题解决',
      date: '2021-04-16'
    },
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/23/',
      title: 'linux下的pdf阅读软件',
      date: '2021-04-16'
    },
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/21/',
      title: '博客开发计划',
      date: '2021-04-16'
    }
  ],
  hotarticle: [
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/25/',
      title: '云服务ECS无法访问变现云盘读写BPS/IOPS异常问题解决',
      date: '2021-04-16'
    },
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/23/',
      title: 'linux下的pdf阅读软件',
      date: '2021-04-16'
    },
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/21/',
      title: '博客开发计划',
      date: '2021-04-16'
    }
  ],
  recent_guess: [
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/25/',
      title: '云服务ECS无法访问变现云盘读写BPS/IOPS异常问题解决',
      date: '2021-04-16'
    },
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/23/',
      title: 'linux下的pdf阅读软件',
      date: '2021-04-16'
    },
    {
      img_url: '/weixin.jpg',
      articl_url: '/articles/21/',
      title: '博客开发计划',
      date: '2021-04-16'
    }
  ]
}
</script>
<style lang="css" scoped>
.demo-tabs :deep(.el-tabs__item) {
  padding: 0px 4px 0px 4px !important;
}
.demo-tabs > .el-tabs__content {
  width: 100%;
  padding: 2px;
  color: #6b778c;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
