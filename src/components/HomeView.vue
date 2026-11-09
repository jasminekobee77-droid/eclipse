<script setup>
import FeaturedArticle from '../components/FeaturedArticle.vue'
import ArticleCard from '../components/ArticleCard.vue'

const articles = [
  {
    id: 1,
    title: 'Capsule Wardrobe Essentials',
    category: 'Fashion',
    description: 'Key pieces to build a timeless wardrobe.'
  },
  {
    id: 2,
    title: 'Everyday Makeup Routine',
    category: 'Beauty',
    description: 'A simple and natural look for any day.'
  },
  {
    id: 3,
    title: 'Fashion Around the World',
    category: 'Culture',
    description: 'How different cultures shape today’s style.'
  }
]
</script>

<template>
  <main>
    <h2>Welcome to ECLIPSE</h2>

    <p>
      Discover the latest in fashion, beauty,
      culture and lifestyle.
    </p>

    <FeaturedArticle />

    <h2>Latest Articles</h2>

    <div class="articles">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :category="article.category"
        :description="article.description"
      />
    </div>
  </main>
</template>

<style scoped>
    main {
      padding: 40px 20px;
    }

    h2 {
      text-align: center;
      margin: 30px 0;
    }

    main > p {
      text-align: center;
    }

    .articles {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 30px;
    }

    @media (max-width: 700px) {
      .articles {
        grid-template-columns: 1fr;
      }
    }
</style>
