import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import ArticleView from '../components/ArticleView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/articles/:id', name: 'article-detail', component: ArticleView }
    ]
})

export default router