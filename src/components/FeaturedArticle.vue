
<template>
  <section class="featured">
    <div class="featured-text">
    <p>FEATURED</p>

    <h2>The Season’s Biggest Fashion Trends</h2>

    <p>
      A look at the styles, colors and pieces defining fashion right now.
    </p>

    <button>Read Article →</button>
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
      background-color: #f5f5f5;
      padding: 60px;
      text-align: center;
    }

    h2 {
      font-family: Arial, sans-serif;
      font-size: 50px;
    }

    button {
      background-color: black;
      color: white;
      padding: 12px 20px;
      border: none;
      cursor: pointer;
    }

    .featured-text {
      width: 40%;
    }

    .featured-image {
      width: 60%;
      height: 350px;
      background-color: #e8e8e8;
      text-align: center;
    }
</style>
