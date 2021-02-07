import VueRouter from 'vue-router';
import Detail from './pages/Detail';
import Home from './pages/Home';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail',
    component: Detail,
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
});
