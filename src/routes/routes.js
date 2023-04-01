import { createRouter, createWebHistory } from "vue-router";

const Home = () => import ('../pages/Home.vue');
const Detailed = () => import ('../pages/CountryDetailed.vue')

const routes = [
    {path: "/", name: 'Home', component: Home},
    {path: "/:country", name: 'Country', component: Detailed},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;