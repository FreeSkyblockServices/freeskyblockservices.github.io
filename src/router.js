import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const base = "/home";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            layout: 'default'
        }
    },
];

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes,            
});

export default router;
