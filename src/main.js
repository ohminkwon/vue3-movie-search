import { createApp } from 'vue'
import App from './App'
import loadImage from './plugins/loadImage'
import router from './routes/index.js'
import store from './store/index.js'

createApp(App)
  .use(router)    //$route, $router
  .use(store)     //$store
  .use(loadImage) //$loadImage
  .mount('#app')