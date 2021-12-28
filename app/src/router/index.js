import Vue from 'vue';
import Router from 'vue-router';
import Nathan from '../components/Nathan.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Work from '../components/Work.vue';
import Research from '../components/Research.vue';
import Contact from '../components/Contact.vue';


Vue.use(Router);

const routes = [
    {
        path: '/app',
        name: "Nathan",
        component: Nathan,
        meta: { title: "Nathan Woodruff" },
        children: [
            {
                path: 'home',
                name: "Home",
                component: Home
            },
            {
                path: 'about',
                name: "About",
                component: About
            },
            {
                path: 'work',
                name: "Work",
                component: Work
            },
            {
                path: 'research',
                name: "Research",
                component: Research
            },
            {
                path: 'contact',
                name: "Contact",
                component: Contact
            }
        ]
    },
    {
        path: '/*',
        redirect: 'app/home'
    }
]

export default new Router({
    routes
})