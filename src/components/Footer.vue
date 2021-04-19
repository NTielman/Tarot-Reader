<template>
  <footer>
    <router-link class="shine" to="/">Home</router-link> |
    <router-link class="shine" :to="{ name: 'Categories' }"
      >Categories</router-link
    >
    |
    <router-link class="shine" :to="{ name: 'Random' }">Random</router-link>
  </footer>
</template>


<style scoped>
footer {
  padding: 1em;
  display: flex;
  justify-content: space-between;
  background: #060605;
}

a {
  width: 35%;
  text-decoration: none;
  text-align: center;
  color: #b1b1b1;
}
</style>