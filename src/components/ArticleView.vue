<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticles } from '../stores/articlesStore.js'

const route = useRoute()
const { articles } = useArticles()

const article = computed(() => {
  return articles.value.find(item =>
      item.id === Number(route.params.id)
  )
})

const relatedArticles = computed(() => {
  return articles.value.filter(item =>
      item.id !== Number(route.params.id)
  ).slice(0, 3)
})
</script>

<template>
  <main v-if="article">
    <div class="article-layout">
      <article>
        <RouterLink to="/">← Back to Home</RouterLink>

        <p class="category">{{ article.category }}</p>

        <h1>{{ article.title }}</h1>

        <p class="details">
          By {{ article.author }} | {{ article.date }}
        </p>

        <div class="article-image">
          Article Image
        </div>

        <p>{{ article.description }}</p>

        <p>{{ article.content }}</p>
      </article>

      <aside>
        <h2>Related Articles</h2>

        <div v-for="item in relatedArticles"
             :key="item.id"
             class="related-card">

          <p>{{ item.category }}</p>

          <RouterLink :to="'/articles/' + item.id">
            {{ item.title }}
          </RouterLink>

          <p>{{ item.description }}</p>
        </div>
      </aside>
    </div>
  </main>

  <main v-else>
    <h2>Article not found</h2>
    <RouterLink to="/">Back to Home</RouterLink>
  </main>
</template>

<style scoped>
    main {
      max-width: 1400px;
      margin: auto;
      padding: 40px 20px;
    }

    .article-layout {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 50px;
    }

    aside {
      border-left: 1px solid #dddddd;
      padding-left: 30px;
    }

    .related-card {
      border-bottom: 1px solid #dddddd;
      padding: 15px 0;
    }

    .related-card a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }

    .category {
      font-weight: bold;
      font-size: 14px;
    }

    h1 {
      font-family: Georgia, serif;
      font-size: 45px;
    }

    .details {
      color: #777777;
    }

    .article-image {
      background-color: #f5f5f5;
      padding: 100px 20px;
      text-align: center;
      margin: 30px 0;
    }

    h2 {
      font-size: 26px;
    }

    p {
      line-height: 1.8;
    }

    @media (max-width: 768px) {
      .article-layout {
        grid-template-columns: 1fr;
      }

      aside {
        border-left: none;
        padding-left: 0;
      }
    }
</style>