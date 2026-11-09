<script setup>
defineProps(['title', 'category', 'description'])
</script>

<template>
  <div class="card">
    <p class="category">{{ category }}</p>

    <h3>{{ title }}</h3>

    <p>{{ description }}</p>

    <button>Read Article</button>
  </div>
</template>

<style scoped>
    .card {
      background-color: #f5f5f5;
      padding: 25px;
      border: 1px solid #ddd;
    }

    .category {
      font-weight: bold;
      font-size: 12px;
    }

    h3 {
      font-family: Georgia, serif;
      font-size: 24px;
    }

    button {
      background-color: black;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
    }
</style>
