<template>
  <ArticleOverview
    :article="article"
    v-for="(article, index) in articleList"
    :key="index"
  ></ArticleOverview>
</template>

<script setup lang="ts">
import ArticleOverview from '@/components/ArticleOverview.vue'
import { reactive } from 'vue'

const articleList = reactive([
  {
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
  },
  {
    url: 'bbb',
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
  },
  {
    url: 'aaaa',
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
      迎刃而解，一起学起来吧！不知道大家使用 Vue3 的时候有没有这样的疑惑"
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
])
</script>
<style>
.articlelist {
  width: 100%;
  border: 2px solid #e3e4e4;
  margin: 1px 4px 4px 0;
  padding: 4px;
}
</style>
