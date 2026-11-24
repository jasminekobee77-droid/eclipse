import { ref } from 'vue'
import { initialArticles } from '../data/articles.js'

const articles = ref(initialArticles.map(item => ({ ...item })))

let nextId = Math.max(0, ...articles.value.map(item => item.id)) + 1

// Add or edit an article
function saveArticle(id, title, category, description, content, author, date) {

    if (!title.trim()) return 'Please enter a title.'
    if (!category) return 'Please choose a category.'
    if (!description.trim()) return 'Please enter a description.'
    if (!content.trim()) return 'Please enter article content.'
    if (!author.trim()) return 'Please enter an author.'
    if (!date.trim()) return 'Please enter a date.'

    if (id === null) {
        articles.value.push({
            id: nextId++,
            title,
            category,
            description,
            content,
            author,
            date
        })
    } else {
        const article = articles.value.find(item => item.id === id)

        if (!article) return 'Article not found.'

        article.title = title
        article.category = category
        article.description = description
        article.content = content
        article.author = author
        article.date = date
    }

    return ''
}

// Delete an article
function removeArticle(id) {
    articles.value = articles.value.filter(item => item.id !== id)
}

// Share articles and functions between pages
export function useArticles() {
    return {
        articles,
        saveArticle,
        removeArticle
    }
}