
<template>
  <header>
    <h1>ECLIPSE</h1>

    <nav>
      <a href="#">Home</a>
      <a href="#">Fashion</a>
      <a href="#">Beauty</a>
      <a href="#">Culture</a>
      <a href="#">Lifestyle</a>
    </nav>
  </header>
</template>

<style scoped>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px;
      border-bottom: 1px solid #ddd;
    }

    h1 {
      font-family: Georgia, serif;
      font-size: 40px;
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
</style>
