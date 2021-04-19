<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100vh;
}

::selection {
  background-color: #fafafa;
  color: #1e1e1e;
}

body {
  font-family: "Cormorant Garamond", serif;
  background-image: url("https://images.unsplash.com/photo-1454177697940-c43d9f9a7307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-blend-mode: luminosity;
  background-color: #ffffff;
  color: #fafafa;
}

body,
#app {
  width: 100%;
  height: 100%;
}

main {
  padding: 2em;
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 95vh;
}

h1,
h2,
h3 {
  font-family: "Playfair Display", serif;
}

.shine::before {
  content: "";
  position: absolute;
  top: 0;
  left: -200%;
  width: 100px;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    305deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-30deg);
  transition: left 0.5s linear;
}

.shine:hover::before {
  left: 150%;
}

.shine:hover {
  filter: brightness(2);
}

.shine {
  position: relative;
  overflow: hidden;
}

.modal,
.card-back,
.static-back,
.category-card,
.sort-container,
figure,
.btn {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

/* Tablets */
@media (min-width: 481px) {
  html {
    font-size: 18px;
  }
}
</style>