import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios';
import VueAxios from 'vue-axios';
import { setInterval, clearInterval } from 'timers'

const vm = createApp(App)

vm.use(VueAxios, axios, setInterval, clearInterval)
vm.mount('#app');

