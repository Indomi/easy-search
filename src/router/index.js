import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Manage from '@/components/Manage/Manage'
import List from '@/components/List/List'

Vue.use(Router)

const Error404 = {
  template: '<h2>404错误</h2>'
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '*',
      name: '404',
      component: Error404
    }
  ]
})
