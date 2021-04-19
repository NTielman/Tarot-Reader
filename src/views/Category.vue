<template>
  <main class="categories">
    <h1>Categories</h1>
    <div class="category-list">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="{ name: 'CategoryDetail', params: { id: category.id } }"
      >
        <div class="category-card shine">
          <p class="card-title">{{ category.title }}</p>
        </div>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "Category",
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
  color: currentColor;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: "Playfair Display", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8em;
  /* width: 50%; */
}

.category-card {
  background-color: #2b2b2b;
  background-image: repeating-linear-gradient(
      120deg,
      #b1b1b170,
      #b1b1b170 1px,
      transparent 1px,
      transparent 60px
    ),
    repeating-linear-gradient(
      60deg,
      #b1b1b170,
      #b1b1b170 1px,
      transparent 1px,
      transparent 60px
    ),
    linear-gradient(
      60deg,
      #1e1e1e 25%,
      transparent 25%,
      transparent 75%,
      black 75%,
      #1e1e1e
    ),
    linear-gradient(
      120deg,
      black 25%,
      transparent 25%,
      transparent 75%,
      black 75%,
      black
    );
  background-size: 70px 120px;
  width: calc(40vmin / 1.4);
  height: 40vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.card-title {
  text-align: center;
}

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