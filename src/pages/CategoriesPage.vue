<template>
  <main class="categories">
    <h1>Categories</h1>

    <div class="category-list">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="{ name: 'Category', params: { id: category.id } }"
      >
        <div class="card-back shine shaded">
          <p class="card-title">{{ category.title }}</p>
        </div>
      </router-link>
    </div>
  </main>
</template>


<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: [
        { title: "Major Arcanas", id: "type=major" },
        { title: "Wands", id: "suit=wands" },
        { title: "Cups", id: "suit=cups" },
        { title: "Swords", id: "suit=swords" },
        { title: "Pentacles", id: "suit=pentacles" },
      ],
    };
  },
};
</script>


<style scoped>
.category-list {
  margin: 1em auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
}

a {
  margin: 0.8em;
  text-decoration: none;
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  color: currentColor;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-back {
  width: calc(40vmin / 1.4);
  height: 40vmin;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-title {
  text-align: center;
}

/* Media queries
   ====================================================== */
/* Phone */
@media (min-width: 431px) {
  .card-title {
    width: 100%;
    padding: 1em;
  }
}

/* Laptops */
@media (min-width: 769px) {
  .category-card {
    width: calc(30vmin / 1.4);
    height: 30vmin;
  }
}

/* Desktops */
@media (min-width: 1025px) {
  .categories {
    display: flex;
  }

  .category-list {
    flex-grow: 3;
  }
}
</style>