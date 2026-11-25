import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import ArticleView from '../components/ArticleView.vue'
import AdminView from '../components/AdminView.vue'
import SearchView from '../components/SearchView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/articles/:id', name: 'article-detail', component: ArticleView },
        { path: '/admin', name: 'admin', component: AdminView },
        { path: '/search', name: 'search', component: SearchView }
    ]
})

export default router