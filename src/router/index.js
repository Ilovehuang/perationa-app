import Vue from 'vue';
import Router from 'vue-router';
import yesterday from '../components/period/yesterday';
import sevendays from '../components/period/sevendays';
import month from '../components/period/month';

Vue.use(Router);

const routes = [{
  path: '/',
  redirect: '/sevendays',
  component: sevendays
}, {
  path: '/yesterday',
  component: yesterday
}, {
  path: '/sevendays',
  component: sevendays
}, {
  path: '/month',
  component: month
}];

export default new Router({
  linkActiveClass: 'active',
    routes
});
