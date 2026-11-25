
<template>
  <section class="featured">
    <div class="featured-text">
    <p>FEATURED</p>

    <h2>The Season’s Biggest Fashion Trends</h2>

    <p>
      A look at the styles, colors and pieces defining fashion right now.
    </p>
      <RouterLink to="/articles/1" class="featured-button">
        Read Article →
      </RouterLink>
    </div>

    <div class="featured-image">
      Image
    </div>

  </section>
</template>

<style scoped>
    .featured {
      display: flex;
      align-items: center;
      gap: 40px;
      background-color: #d9d9d9;
      padding: 60px;
      text-align: center;
    }

    h2 {
      font-family: Arial, sans-serif;
      font-size: 50px;
    }

    .featured-button {
      background-color: black;
      color: white;
      padding: 12px 20px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
    }

    .featured-text {
      width: 40%;
      text-align: left;
    }

    .featured-image {
      width: 60%;
      height: 350px;
      background-color: #e8e8e8;
      text-align: center;
    }
</style>
