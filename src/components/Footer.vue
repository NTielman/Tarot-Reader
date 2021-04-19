<template>
  <footer>
    <router-link class="shine" to="/">Home</router-link> |
    <router-link class="shine" to="/random">Random</router-link> |
    <router-link class="shine" to="/category">Categories</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  /* border-top: solid 2px #b1b1b1; */
  background-color: #060605;
}

a {
  text-align: center;
  color: #b1b1b1;
  text-decoration: none;
  width: 35%;
  height: 100%;
}
</style>