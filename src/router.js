import { createRouter, createWebHashHistory } from "vue-router";
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
    history: createWebHashHistory(),
    routes,            
});

export default router;
