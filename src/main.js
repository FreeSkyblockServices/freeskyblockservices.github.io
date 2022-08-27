import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import Home from "./views/Home.vue";
import router from './router'

const app = createApp(App)
    .use(router)
    .mount('#app');
