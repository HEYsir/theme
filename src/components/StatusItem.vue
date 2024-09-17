<template>
  <div class="side-list">
    <div class="side-item" v-for="(item, idx) in statusList" :key="idx">
      <div class="side-item-thumb">
        <a :href="item.img_url" target="_blank">
          <img :src="item.img_url" alt="" width="100%" height="100%" />
        </a>
      </div>
      <!-- .latest-item-thumb -->
      <div class="side-item-text-wrap">
        <h3 class="side-item-title">
          <a href="javascript:void(0)" @click="openDialog(item.articl_url)">{{ item.title }}</a>
        </h3>
        <div class="side-item-meta entry-meta">
          <span class="fa fa-calendar">{{ item.date }}</span>
        </div>
      </div>
      <!-- .latest-item-text-wrap -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import { useCommandComponent } from '../hooks/useCommandComponent'
import ArticleDetail from './ArticleDetail.vue'

const myDialog = useCommandComponent(ArticleDetail)

interface Item {
  img_url?: string
  articl_url: string
  title: string
  date: string
}
defineProps({
  statusList: {
    type: Array as PropType<Item[]>,
    required: true
  }
})

function openDialog(url: string) {
  console.log(url)
  const article = {
    pageid: 'ccc',
    is_recommend: true,
    title: '这是个随便测试的东西',
    content: `不知道大家使用 Vue3 的时候有没有这样的疑惑"
      "，“ref、rective 都能创建一个响应式对象，我该如何选择？”，
      “为什么响应式对象解构之后就失去了响应式？应该如何处理？” 今天咱们就来
      全面盘点一下 ref、reactive，相信看完所有响应式问题都会
      迎刃而解，一起学起来吧！不知道大家使用 Vue3 的时候有没有这样的疑惑"
      "，“ref、rective 都能创建一个响应式对象，我该如何选择？”，
      “为什么响应式对象解构之后就失去了响应式？应该如何处理？” 今天咱们就来
      全面盘点一下 ref、reactive，相信看完所有响应式问题都会
      迎刃而解，一起学起来吧！`,
    category: { parent: '技术', cur: '测hi' },
    tag: ['ECS', 'SSH无法连接', 'BPS异常', 'IOPS异常', '内存不足', 'mysql8', 'performance_schema'],
    date_publish: '2014-09-18',
    click_count: 10,
    comment_count: 20,
    likes_count: 30
  }
  myDialog({ article: article })
  return false
}
</script>

<style scoped>
.tab-content li {
  border-bottom: 1px solid #dddddd;
  clear: both;
  float: left;
  width: 100%;
  padding: 7px 0 0 0;
  margin: 0;
}

.side-item-thumb {
  float: left;
  margin-right: 2px;
  width: 38px;
}

.side-item {
  clear: both;
  margin-bottom: 10px;
  float: left;
  width: 100%;
}

.tabs h3 {
  margin-top: 0;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
}

.entry-meta {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 10px;
}

.comment-item-title strong {
  color: #ee3333;
  text-transform: capitalize;
}
</style>
