import Vue from 'vue'
import Router from 'vue-router'
import FirstStep from './components/steps/FirstStep.vue';
import SecondStep from './components/steps/SecondStep.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/1'
    },
    {
      path: '/:id',
      name: 'firstStep',
      component: FirstStep
    },
    {
      path: '/:id',
      name: 'secondStep',
      component: SecondStep
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
