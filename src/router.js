import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home.vue'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/pages/index.vue'),
        },
        {
          path: '/product/:id',
          name: 'product',
          component: () => import('@/pages/product.vue'),
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import('@/pages/detail.vue'),
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/cart.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/pages/order.vue'),
      children: [
        {
          path: 'list',
          name: 'order-list',
          component: () => import('@/pages/orderList.vue'),
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: () => import('@/pages/orderConfirm.vue'),
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: () => import('@/pages/orderPay.vue'),
        },
        {
          path: 'alipay',
          name: 'ali-pay',
          component: () => import('@/pages/alipay.vue'),
        },
      ],
    },
  ],
})
export default router
