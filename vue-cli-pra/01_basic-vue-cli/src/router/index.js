import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

const About = {
  template: `
    <div>this is About About About About page</div>
  `
};

const Introduce = {
  template: `
    <div>this is Introduce Introduce Introduce Introduce page</div>
  `
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    }
  ]
});
