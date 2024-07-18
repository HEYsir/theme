<template>
  <div style="margin-bottom: 10px">
    <el-card shadow="hover">
      <div class="article">
        <div class="article-title">
          <span v-if="article.is_recommend" class="article-flag article-recommend">荐</span>
          <span class="article-flag article-type">原</span>
          <a href="javascript:void(0)" onclick=" openDialog('{% url 'detail' article.id %}')">
            {{ article.title }}
          </a>
        </div>
        <div class="article-meta">
          <div class="article-folder">
            <a><font-awesome-icon icon="fa-folder-open" />{{ article.category.parent }}</a
            >.<a>{{ article.category.cur }}</a>
            <i><font-awesome-icon icon="fa-tags" /></i>
            <a class="tag-item" v-for="tag in article.tag" :key="tag">{{ tag }}</a>
          </div>
          <div class="article-info">
            <span><font-awesome-icon icon="fa-clock" />{{ article.date_publish }}</span>
            <span><font-awesome-icon icon="fa-eye" />{{ article.click_count }}阅读</span>
            <span><font-awesome-icon icon="fa-comments" />{{ article.comment_count }}评论</span>
            <span><font-awesome-icon icon="fa-heart" />{{ article.likes_count }}喜欢</span>
          </div>
        </div>
        <div class="vditor-reset article-content">
          {{ summary }}
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, type PropType } from 'vue'

const props = defineProps({
  article: {
    type: Object as PropType<{
      is_recommend: boolean
      title?: string
      desc?: string
      content: string
      category: { parent: string; cur: string }
      tag: Array<string>
      date_publish: string
      click_count: number
      comment_count: number
      likes_count: number
    }>,
    required: true
  }
})
const summary = computed(() => {
  const isTitleEmpty = props.article.desc?.trim() === '' ?? false
  return props.article.desc !== undefined && !isTitleEmpty
    ? props.article.desc
    : props.article.content.substring(0, 300)
})
</script>
<style>
/* 标题样式设计 */
.article-title {
  display: inline-block;
  text-decoration: none;
}

.article-title > a {
  font-size: 20px;
  font-weight: bold;

  color: #000000;
  text-decoration: none;
}

.article-flag {
  margin-top: 4px;
  width: 22px;
  height: 22px;

  display: inline-block;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  border: 1px solid;
  border-radius: 30%;
}

.article-type {
  border-color: #ffafbb;
  color: #ca0c16;
}

.article-recommend {
  border-color: #8382ca;
  color: #2828ca;
}

.article-content {
  text-overflow: ellipsis;
}
/* 文本编辑器输入的会带个p标签 */
.article-content > p {
  margin: 10px 0 10px 0;
}

/* 文章附属信息显示布局 */
.article-meta {
  display: flex;
  font-size: 14px;
}

.article-folder {
  flex: 1 1 auto;
}

.article-info {
  flex: 0 1 auto;
  color: #818183;
}

.article-folder > i {
  /* 标签图标和分类留出一定间距 */
  margin-left: 4px;
}

.tag-item {
  margin-right: 2px;
  padding: 0 6px;
  line-height: 21px;
  border: 1px solid #ccc;
  border-radius: 100px;
  color: #4d4d4d;
  text-align: center;
  margin-bottom: 4px;
  font-size: 12px;
  display: inline-block;
  word-wrap: break-word;
  text-decoration: none;
  cursor: pointer;
}

.article-info > span {
  /* 标签图标和分类留出一定间距 */
  margin-right: 6px;
}
</style>
