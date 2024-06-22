<template>
  <div class="fullscreen" v-if="hasNavigated">
    <img :src="imageUrl" alt="Welcome Image" class="fullscreen-image" />
    <div class="wrapper text-overlay">{{ welcomeText }}</div>
  </div>

  <RouterView v-else />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 假设这是你的图片路径
const welcomeText = '临渊羡鱼，不如退而结网'
const imageUrl = 'https://img.36krcdn.com/20221128/v2_997cf69b36b046fe847f6c017cbb70f5_img_000'
// 使用ref来追踪导航是否已经发生
const hasNavigated = ref(true)

onMounted(() => {
  // 设置一个定时器，在5秒后导航到主页
  const timer = setTimeout(() => {
    navigateToHomePage()
    hasNavigated.value = false // 标记导航已完成
  }, 3000)

  // 如果组件被卸载，清除定时器以避免内存泄漏
  return () => clearTimeout(timer)
})

// 导航到主页的方法
const navigateToHomePage = () => {
  // 这里假设你使用的是Vue Router进行导航
  // 确保你已经正确导入了useRouter
  router.push('/')
}
</script>

<style scoped>
.fullscreen {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.fullscreen-image {
  height: 100%;
  width: 100%;
}
.wrapper {
  place-items: flex-start;
  flex-wrap: wrap;
  overflow-wrap: break-word; /* 另一个兼容性更好的属性，用于允许单词内的换行，与word-wrap作用相似，现代浏览器推荐使用这个 */
  word-break: break-word;
}
.text-overlay {
  position: absolute; /* 绝对定位使文字脱离正常文档流 */
  top: 50%; /* 将文字垂直居中（从图片顶部开始计算） */
  left: 50%; /* 将文字水平居中（从图片左侧开始计算） */
  transform: translate(-50%, -50%); /* 通过translate调整实际位置，实现完全居中 */
  text-align: center; /* 文字水平居中对齐 */
  padding: 20px; /* 可选，为文字添加一些内边距 */
  box-sizing: border-box; /* 保持padding在width内 */
  font-size: 48px;
}
</style>
