<script setup>
import FeaturedArticle from '../components/FeaturedArticle.vue'
import ArticleCard from '../components/ArticleCard.vue'

const articles = [
  {
    id: 1,
    title: 'Street Style: Looks We Love',
    category: 'Fashion',
    description: 'Key pieces to build a timeless wardrobe.'
  },
  {
    id: 2,
    title: 'The Glow Guide',
    category: 'Beauty',
    description: 'A simple and natural look for any day.'
  },
  {
    id: 3,
    title: 'Fashion & Identity',
    category: 'Culture',
    description: 'How different cultures shape today’s style.'
  },
  {
    id: 4,
    title: 'A More Stylish Routine',
    category: 'Lifestyle',
    description: 'Easy lifestyle habits for a balanced, stylish life.'
  }
]
</script>

<template>
  <main>
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
      padding: 0;
    }

    h2 {
      text-align: left;
      margin: 30px 0;
    }

    .articles {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-top: 30px;
    }

    @media (max-width: 700px) {
      .articles {
        grid-template-columns: 1fr;
      }
    }
</style>
