import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routers: [
        {
            path: '/invite',
            redirect: window.location.href = "https://discord.gg/xKEHBXFFQP"
        }
    ]
})