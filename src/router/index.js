import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Manage from '@/components/Manage/Manage'

Vue.use(Router)
const User = {
  template: `
    <div>
      <h2>User {{ $route.params.id }} </h2>
      <route-view></route-view>
    </div>
  `,
  watch: {
    '$route'(to, from) {
      console.log(to);
      console.log(from);
    }
  }
}
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
    },{
      path: '/user/:id',
      component: User,
      children: [
        { path: 'profile', component: UserProfile }
      ]
    },{
      path: '*',
      component: Error404
    }
  ]
})
