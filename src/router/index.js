import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/MainPage/MainPage'
import subscriptions from '@/components/subscriptions/subscriptions'
import recommendation from '@/components/subscriptions/children/recommendation'
import userRecommend from '@/components/subscriptions/children/userRecommend'
import notifications from '@/components/notifications/notifications'
import users from '@/components/users/users'
import writer from '@/components/writer/writer'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/',
      meta: {
        title: '简书'
      }
    },
    {
      path: '/',
      name: 'mainpage',
      component: MainPage,
      meta: {
        index: 0,
        title: '简书'
      }
    },
    {
      path: '/subscriptions', // 关注
      name: 'subscriptions',
      component: subscriptions,
      children: [
        {
          path: 'recommendation',
          component: recommendation,
          meta: {
            index: 1,
            title: '关注'
          }
        },
        {
          path: 'user/:userId?',
          component: userRecommend
        }
      ]
    },
    {
      path: '/notifications', // 消息
      name: 'notifications',
      component: notifications,
      meta: {
        index: 2,
        title: '消息'
      }
    },
    {
      path: '/users', // 用户
      name: 'users',
      component: users,
      meta: {
        index: 3,
        title: '用户'
      }
    },
    {
      path: '/writer', // 写文章
      name: 'writer',
      component: writer,
      meta: {
        index: 4,
        title: '写文章'
      }
    }
  ]
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = 'VinoMars'
  }
})

export default router
