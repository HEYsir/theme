import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faWeibo } from '@fortawesome/free-brands-svg-icons'
import {
  faClock,
  faComments,
  faEye,
  faFolderOpen,
  faHeart,
  faRss,
  faTags
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFolderOpen, faTags, faClock, faEye, faComments, faHeart, faRss, faGithub, faWeibo)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
// size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000。
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
