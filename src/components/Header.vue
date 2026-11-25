
<template>
  <header>
    <div class="logo">
      <h1>ECLIPSE</h1>
      <p>FASHION MAGAZINE</p>
    </div>

    <nav>
      <a href="#">Home</a>
      <a href="#">Fashion</a>
      <a href="#">Beauty</a>
      <a href="#">Culture</a>
      <a href="#">Lifestyle</a>
    </nav>

    <div class="header-buttons">
      <RouterLink to="/search" aria-label="Search articles">
        🔍
      </RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
    </div>

  </header>
</template>

<style scoped>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      border-bottom: 1px solid #ddd;
    }

    h1 {
      font-family: Georgia, serif;
      font-size: 32px;
      font-weight: normal;
      margin: 0;
    }

    nav {
      display: flex;
      gap: 20px;
    }

    a {
      color: black;
      text-decoration: none;
    }

    .logo p {
      font-size: 9px;
      letter-spacing: 4px;
      margin: 0;
    }

    .header-buttons {
      display: flex;
      gap: 15px;
    }

    .header-buttons button {
      padding: 8px 15px;
      border: 1px solid #999;
      border-radius: 8px;
      background-color: white;
      cursor: pointer;
    }
</style>
