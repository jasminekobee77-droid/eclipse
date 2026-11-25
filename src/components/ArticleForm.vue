<script setup>
import { ref } from 'vue'
import { useArticles } from '../stores/articlesStore.js'

const { saveArticle } = useArticles()

const props = defineProps(['article'])
const emit = defineEmits(['close'])

const title = ref(props.article ? props.article.title : '')
const category = ref(props.article ? props.article.category : '')
const description = ref(props.article ? props.article.description : '')
const content = ref(props.article ? props.article.content : '')
const author = ref(props.article ? props.article.author : '')
const date = ref(props.article ? props.article.date : '')
const errorMessage = ref('')

// Add or edit an article
function submitArticle() {
  errorMessage.value = saveArticle(
      props.article ? props.article.id : null,
      title.value,
      category.value,
      description.value,
      content.value,
      author.value,
      date.value
  )

  if (errorMessage.value) {
    return
  }

  // Close the form after saving
  emit('close')
}
</script>

<template>
  <section class="article-form">

    <h2>{{ article ? 'Edit Article' : 'Add New Article' }}</h2>

    <form @submit.prevent="submitArticle">

      <label for="title">Article Title</label>
      <input id="title" v-model="title" required>

      <label for="category">Category</label>
      <select id="category" v-model="category" required>
        <option value="">Choose a category</option>
        <option>Fashion</option>
        <option>Beauty</option>
        <option>Culture</option>
        <option>Lifestyle</option>
      </select>

      <label for="description">Description</label>
      <textarea id="description"
                v-model="description"
                required></textarea>

      <label for="content">Article Content</label>
      <textarea id="content"
                v-model="content"
                required></textarea>

      <label for="author">Author</label>
      <input id="author" v-model="author" required>

      <label for="date">Date</label>
      <input id="date" type="date" v-model="date" required>

      <button type="submit">Save Article</button>

      <button type="button"
              class="cancel-button"
              @click="emit('close')">
        Cancel
      </button>

      <p v-if="errorMessage" class="error-message" role="alert">
        {{ errorMessage }}
      </p>

    </form>
  </section>
</template>

<style scoped>
    .article-form {
      background-color: #f5f5f5;
      border: 1px solid #cccccc;
      border-radius: 8px;
      padding: 25px;
      margin: 25px 0;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }

    input, select, textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 12px;
      margin-bottom: 20px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      font: inherit;
    }

    textarea {
      min-height: 100px;
    }

    button {
      background-color: black;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #333333;
    }

    .cancel-button {
      background-color: #dddddd;
      color: black;
      margin-left: 10px;
    }

    .cancel-button:hover {
      background-color: #cccccc;
    }

    .error-message {
      color: red;
    }
</style>