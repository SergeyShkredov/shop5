import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD

createApp(App).mount('#app')
=======
import router from './router/index.js'


//using axios as a global object
window.axios = require('axios')

createApp(App).use(router).mount('#app');
>>>>>>> 3b39046 (init)
