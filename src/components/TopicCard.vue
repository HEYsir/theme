<template>
  <div class="topic clearfix">
    <h4 class="topic-title">{{ props.title }}</h4>
    <ul class="topic-cat">
      <li v-for="(topic, index) in props.topicList" :key="index">
        <a href="/">{{ topic }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['title', 'topicList'])
</script>
<style>
.topic {
  margin-bottom: 25px;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0;
}

.topic a {
  color: #4c4c4c;
  text-decoration: none;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}

.topic ul {
  padding: 0;
  margin: 0;
}

.topic li {
  list-style: none;
  padding: 2px 0;
  margin: 0;
}

.topic .topic-title {
  position: relative;
  margin: 0 0 15px;
  padding-bottom: 15px;
}

.topic .topic-title::after {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 40px;
  background-color: #5bc0eb;
  content: '';
}

.topic-cat li::before {
  content: '\f07b';
  font-family: 'FontAwesome', serif;
  font-weight: 400;
  margin-right: 8px;
}
</style>
