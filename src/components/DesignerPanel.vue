<template>
  <div class="sidebar-designer">
    <div class="designer">
      <div class="avatar">
        <a href="https://www.noinf.com/" title="陈大仙">
          <img src="/avatar.png" alt="陈大仙的头像" width="50%" />
        </a>
      </div>
      <h2 class="brand-title">陈大仙</h2>
      <h4 class="brand-tagline">弹指间尘土湮灭，人生点滴如秋风夏雨</h4>
    </div>
    <div class="sns">
      <a href="https://www.noinf.com/feed" target="_blank" rel="nofollow" title="RSS">
        <i aria-hidden="true"><font-awesome-icon icon="fa-solid fa-rss" />RSS</i>
      </a>
      <a href="https://weibo.com/u/2077449863" target="_blank" rel="nofollow" title="新浪微博">
        <i aria-hidden="true"><font-awesome-icon icon="fa-brands fa-weibo" />新浪微博</i>
      </a>
      <a href="https://github.com/HEYsir" target="_blank" rel="nofollow" title="github">
        <i aria-hidden="true"><font-awesome-icon icon="fa-brands fa-github" />github</i>
      </a>
    </div>
  </div>
</template>

<style lang="css">
.sidebar-designer {
  /* 与侧边上下增加空白区域 */
  padding: 30px 0 40px;
  /* text-align:center; */
  position: relative;
}

/* 用户信息整体居中 */
.designer {
  text-align: center;
  top: auto;
  margin: 1em auto;
}

/* 头像设计 */
.avatar {
  margin-top: 30px;
  text-align: center;
}

.avatar img {
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #d0e0f0;
  /*-webkit-transition: .5s;*/
  /*-moz-transition: .5s;*/
  /*-ms-transition: .5s;*/
  /*-o-transition: .5s;*/
  /*transition: .5s;*/
}

/* 鼠标移动到头像高亮效果 */
.avatar img:hover {
  box-shadow:
    0 0 0 2px #38a3fd,
    0 5px 8px rgba(56, 163, 253, 0.38);
  /* 有个渐变效果 */
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

/* 昵称及签名效果 */
.brand-title {
  text-transform: uppercase; /* 强制字母大写 */
}
.brand-tagline {
  font-weight: 300;
  color: rgb(176, 202, 219);
}
.brand-title,
.brand-tagline {
  margin: 0; /* 强制字母大写 */
}

/* 用户信息分割线 */
.sidebar-designer > div:not(:last-child) {
  border-bottom: 1px solid #f0f2f4;
}

.sns a {
  color: #b2b4b6;
  margin: 0 3px;
  font-size: 16px;
}

.sns a:hover {
  color: #38a3fd;
}
</style>
