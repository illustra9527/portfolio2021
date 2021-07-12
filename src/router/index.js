import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../components/index'),
        children: [
            {
                path: '/',
                component: () => import('../components/pageHome')
            },
            {
                path: '/weather-card',
                component: () => import('../components/pageWeatherCard')
            },
            {
                path: '/game',
                component: () => import('../components/pageGame')
            },
            {
                path: '/todo',
                component: () => import('../components/pageTodo')
            },
            {
                path: '/tdee',
                component: () => import('../components/pageTdee')
            },
            {
                path: '/art',
                component: () => import('../components/pageArt')
            },
            {
                path: '/about',
                component: () => import('../components/pageAbout')
            }
        ]
    }

];

const router = new VueRouter({
    // mode: 'history',
    routes
});

export default router;
