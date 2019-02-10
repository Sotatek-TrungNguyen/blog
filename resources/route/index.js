import Vue from 'vue';
import Router from 'vue-router';
import landing from '../js/components/landing.vue';
import about from '../js/components/about.vue';
import dashboard from '../js/components/dashboard.vue'
import projects from '../js/components/projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: landing
    },
    
    {
    	path: '/about',
    	name: 'about',
    	component: about	
    },

    {
      path:'/dashboard',
      name:'dashboard',
      component: dashboard
    },

    {
      path:'/projects',
      name:'projects',
      component: projects
    }
  ]
})