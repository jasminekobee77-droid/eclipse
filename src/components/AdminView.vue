<script setup>
import { ref, computed } from 'vue'
import { useArticles } from '../stores/articlesStore.js'
import ArticleForm from './ArticleForm.vue'

const { articles, removeArticle } = useArticles()

const searchQuery = ref('')
const showForm = ref(false)
const editingArticle = ref(null)

const categories = computed(() =>
    [...new Set(articles.value.map(item => item.category))]
)

const filteredArticles = computed(() =>
    articles.value.filter(item =>
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
)

// Edit an existing article
function startEditing(article) {
  editingArticle.value = article
  showForm.value = true
}

// Add a new article
function startAdding() {
  editingArticle.value = null
  showForm.value = true
}

// Close the article form
function closeForm() {
  showForm.value = false
  editingArticle.value = null
}
</script>

<template>
  <main class="admin">

    <div class="admin-heading">
      <h1>Admin Dashboard</h1>

      <button @click="startAdding">
        + Add New Article
      </button>
    </div>

    <p>Manage your fashion magazine articles.</p>

    <ArticleForm v-if="showForm"
                 :article="editingArticle"
                 :key="editingArticle ? editingArticle.id : 'new'"
                 @close="closeForm" />

    <div class="stats">

      <div class="stat">
        <h2>{{ articles.length }}</h2>
        <p>Total Articles</p>
      </div>

      <div class="stat">
        <h2>{{ categories.length }}</h2>
        <p>Categories</p>
      </div>

      <div class="stat">
        <h2>{{ articles.length }}</h2>
        <p>Published</p>
      </div>

    </div>

    <h2>All Articles</h2>

    <label for="admin-search">Search articles</label>

    <input id="admin-search"
           type="search"
           v-model="searchQuery"
           placeholder="Search articles...">

    <table>
      <thead>
      <tr>
        <th>Article Title</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="article in filteredArticles"
          :key="article.id">

        <td>{{ article.title }}</td>

        <td>
                        <span class="category">
                            {{ article.category }}
                        </span>
        </td>

        <td>
          <button @click="startEditing(article)">
            Edit
          </button>

          <button @click="removeArticle(article.id)">
            Delete
          </button>
        </td>

      </tr>
      </tbody>
    </table>

  </main>
</template>

<style scoped>
    .admin {
      max-width: 1200px;
      margin: auto;
      padding: 40px;
    }

    .admin-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
      margin: 30px 0;
    }

    .stat {
      background-color: #eeeeee;
      border: 1px solid #cccccc;
      border-radius: 8px;
      padding: 20px;
    }

    .stat h2 {
      margin: 0;
    }

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 12px;
      margin: 15px 0;
      border: 1px solid #cccccc;
      border-radius: 5px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }

    th {
      background-color: #dddddd;
    }

    th, td {
      padding: 15px;
      border-bottom: 1px solid #cccccc;
    }

    .category {
      background-color: #eeeeee;
      padding: 6px 12px;
      border-radius: 20px;
    }

    button {
      background-color: black;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
      margin: 4px;
    }

    @media (max-width: 700px) {
      .stats {
        grid-template-columns: 1fr;
      }

      .admin {
        padding: 15px;
        overflow-x: auto;
      }
    }
</style>