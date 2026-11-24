<script setup>
defineProps(['id','title', 'category', 'description'])
</script>

<template>
  <div class="card">
    <div class="article-image">Image</div>
    <p class="category">{{ category }}</p>

    <h3>{{ title }}</h3>

    <p>{{ description }}</p>

    <RouterLink class="read-button" :to="{ name: 'article-detail', params: { id: id } }">
      Read Article
    </RouterLink>

  </div>
</template>

<style scoped>
      .card {
        background-color: white;
        text-align: left;
      }

      .category {
        background-color: #e5e5e5;
        border-radius: 15px;
        padding: 4px 12px;
        font-size: 12px;
        display: inline-block;
      }

      h3 {
        font-family: Arial, sans-serif;
        font-size: 20px;
        margin: 5px 0;
      }

      .read-button {
        background-color: black;
        color: white;
        padding: 10px 15px;
        border: none;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
      }

      .article-image {
        background-color: #e5e5e5;
        height: 180px;
        text-align: center;
      }
</style>
