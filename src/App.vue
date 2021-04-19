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
/* Global styling
   ====================================================== */
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

#app,
body {
  width: 100%;
  height: 100%;
}

body {
  font-family: "Cormorant Garamond", serif;
  color: #fafafa;
  background: #fff
    url("https://images.unsplash.com/photo-1454177697940-c43d9f9a7307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80")
    no-repeat fixed center/cover;
  background-blend-mode: luminosity;
}

/* Page styling
   ====================================================== */
main {
  margin: 2em;
  padding-top: 3em;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Page titles */
h1,
h2,
h3 {
  font-family: "Playfair Display", serif;
}

/* Component styling
   ====================================================== */
/* Modal */
.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: #06060580;
  cursor: pointer;
}

.modal {
  margin: 6em auto;
  padding: 1em;
  width: 80%;
  height: 80%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    305deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(5px);
  cursor: default;
}

.modal i {
  width: 10%;
  text-align: center;
  color: #b1b1b1;
  cursor: pointer;
}

/* Card back pattern */
.card-back {
  background: #2b2b2b center/70px 120px;
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
      #000 75%,
      #1e1e1e
    ),
    linear-gradient(
      120deg,
      #000 25%,
      transparent 25%,
      transparent 75%,
      #000 75%,
      #000
    );
}

/* Shiny effect */
.shine {
  position: relative;
  overflow: hidden;
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

.shine:hover {
  filter: brightness(2);
}

.shine:hover::before {
  left: 150%;
}

/* Shading */
.shaded {
  box-shadow: 0 20px 50px #06060580, 3px 3px 2px #0606053f;
}

/* Loading animation */
.placeholder {
  margin: 1em;
  font-size: 1.5rem;
  text-align: center;
}

.placeholder::after {
  content: ".";
  animation: dots 1s infinite;
}

@keyframes dots {
  0%,
  20% {
    color: #00000000;
    text-shadow: 0.25em 0 0 #00000000, 0.5em 0 0 #00000000;
  }
  40% {
    color: currentColor;
    text-shadow: 0.25em 0 0 #00000000, 0.5em 0 0 #00000000;
  }
  60% {
    text-shadow: 0.25em 0 0 currentColor, 0.5em 0 0 #00000000;
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 currentColor, 0.5em 0 0 currentColor;
  }
}

/* Media queries
   ====================================================== */
/* Tablets and up */
@media (min-width: 481px) {
  html {
    font-size: 18px;
  }
}

/* Desktops */
@media (min-width: 1025px) {
  .modal {
    max-width: 60%;
  }
}
</style>