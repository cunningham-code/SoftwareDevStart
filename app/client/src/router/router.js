import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexPage from '../pages/IndexPage.vue';
import MessagesPage from '../pages/MessagesPage.vue';
import Sprint1Page from '../pages/Sprint1Page.vue';
import Sprint2Page from '../pages/Sprint2Page.vue';
import Sprint3Page from '../pages/Sprint3Page.vue';

import NotFound from '../pages/404.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', component: IndexPage },
    { path: '/sprint0/', component: MessagesPage },
    { path: '/sprint1/', component: Sprint1Page },
    { path: '/sprint2/', component: Sprint2Page },
    { path: '/sprint3/', component: Sprint3Page },
    { path: '*', component: NotFound }
  ]
});

export default router;
