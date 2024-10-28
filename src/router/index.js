import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: "/",
        name: "chat-ai",
        component: () => import("@/layout/layout.vue"),
        children: [
            {
                path: '',
                name: 'chat-introduction',
                component: () => import('@/pages/chat/chat-introduction.vue')
              },
              {
                path: ':id',
                name: 'chat-with-id',
                component: () => import('@/pages/chat/chat-introduction.vue')
              }
        ]
    },
    {
        path: "/manage-account",
        name: "manage-account",
        // component: ManagaAccount
        component: () => import("@/pages/manage-account.vue")
    },
    {
        path: "/feature",
        name: "feature",
        component: () => import("@/pages/feature-page.vue")
    },
    {
        path: "/order-confirmation",
        name: "order",
        component: () => import("@/pages/order-confirmation.vue")
    },
    {
        path: "/voyager",
        name: "voyage",
        component: () => import("@/pages/voyage-shop.vue")
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
