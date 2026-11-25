<script setup>
import ArticleCard from '../components/ArticleCard.vue'
import { useArticles } from '../stores/articlesStore.js'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const { articles } = useArticles()

const searchQuery = ref('')
const route = useRoute()

const selectedCategory = computed(() =>
    route.query.category || ''
)

const categories = ['Fashion', 'Beauty', 'Culture', 'Lifestyle']

// Filter articles by search and category
const filteredArticles = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return articles.value.filter(article => {
    const searchableText = `${article.title} ${article.description}`.toLowerCase()

    const matchesSearch = searchableText.includes(query)

    const matchesCategory = !selectedCategory.value ||
        article.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>

<template>
  <main>

    <h1>Explore Articles</h1>

    <p>Find the latest fashion, beauty, culture and lifestyle stories.</p>

    <div class="filters">

      <input id="search"
             type="search"
             v-model="searchQuery"
             aria-label="Search articles"
             placeholder="Search articles...">

      <div class="category-buttons">

        <RouterLink to="/search"
                    :class="{ active: selectedCategory === '' }">
          All
        </RouterLink>

        <RouterLink v-for="category in categories"
                    :key="category"
                    :to="'/search?category=' + category"
                    :class="{ active: selectedCategory === category }">
          {{ category }}
        </RouterLink>

      </div>
    </div>

    <p class="results" role="status">
      Showing {{ filteredArticles.length }} articles
    </p>

    <p v-if="articles.length === 0">
      No articles available.
    </p>

    <p v-else-if="filteredArticles.length === 0">
      No matching articles found.
    </p>

    <div class="articles">
      <ArticleCard
          class="horizontal-card"
          v-for="article in filteredArticles"
          :key="article.id"
          :id="article.id"
          :title="article.title"
          :category="article.category"
          :description="article.description"
      />

    </div>

  </main>
</template>

<style scoped>
    main {
      max-width: 1200px;
      margin: auto;
      padding: 30px;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 10px;
      text-align: left;
    }

    .filters {
      margin: 25px 0;
    }

    .filters input {
      width: 100%;
      box-sizing: border-box;
      padding: 12px;
      border: 1px solid #999999;
      border-radius: 8px;
    }

    .category-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 20px;
    }

    .category-buttons a {
      background-color: #f5f5f5;
      color: black;
      border: 1px solid #999999;
      border-radius: 5px;
      padding: 8px 18px;
      cursor: pointer;
      text-decoration: none;
    }

    .category-buttons a:hover {
      background-color: #dddddd;
    }

    .category-buttons a.active {
      background-color: #555555;
      color: white;
    }

    .results {
      margin: 25px 0;
    }

    .articles {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    @media (max-width: 700px) {
      .articles {
        grid-template-columns: 1fr;
      }

      main {
        padding: 20px;
      }

      h1 {
        font-size: 30px;
      }

      .category-buttons {
        gap: 8px;
      }
    }
</style>