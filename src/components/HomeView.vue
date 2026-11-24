<script setup>
import FeaturedArticle from '../components/FeaturedArticle.vue'
import ArticleCard from '../components/ArticleCard.vue'
import { useArticles } from '../stores/articlesStore.js'
import { ref, computed } from 'vue'

const { articles } = useArticles()

const searchQuery = ref('')
const selectedCategory = ref('')

const categories = computed(() =>
    [...new Set(articles.value.map(article => article.category))].sort()
)

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

function clearFilters() {
  searchQuery.value = ''
  selectedCategory.value = ''
}
</script>

<template>
  <main>
    <FeaturedArticle />

    <h2>Latest Articles</h2>

    <div class="filters">
      <label for="search">Search articles</label>

      <input id="search"
             type="search"
             v-model="searchQuery"
             placeholder="Search articles...">

      <label for="category">Category</label>

      <select id="category" v-model="selectedCategory">
        <option value="">All categories</option>

        <option v-for="category in categories"
                :key="category"
                :value="category">
          {{ category }}
        </option>
      </select>

      <button type="button" @click="clearFilters">
        Clear filters
      </button>
    </div>

    <p class="results" role="status">
      {{ filteredArticles.length }} of {{ articles.length }} articles shown.
    </p>

    <p v-if="articles.length === 0" class="results">
      No articles available.
    </p>

    <p v-else-if="filteredArticles.length === 0" class="results">
      No matching articles found.
    </p>

    <div class="articles">
      <ArticleCard
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
      padding: 0;
    }

    h2 {
      text-align: left;
      margin: 30px 0;
      margin-left: 60px;
    }

    .articles {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-top: 30px;
      padding: 0 60px;
    }

    .filters {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
      padding: 20px 60px;
    }

    .filters input,
    .filters select {
      padding: 10px;
      border: 1px solid #cccccc;
      border-radius: 5px;
    }

    .filters button {
      background-color: black;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .results {
      margin-left: 60px;
      color: #777777;
    }

    @media (max-width: 700px) {
      .articles {
        grid-template-columns: 1fr;
        padding: 0 20px;
      }

      .filters {
        padding: 20px;
      }

      h2,
      .results {
        margin-left: 20px;
      }
    }
</style>
