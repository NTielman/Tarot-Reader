<template>
  <article>
    <figure :style="imageSrc"></figure>
    <div class="card-content">
      <h1>{{ card.name }}</h1>
      <p class="type">Type: {{ card.type }}</p>
      <p v-if="card.suit" class="suit">Suit: {{ card.suit }}</p>
      <h3>Description</h3>
      <p class="desc">{{ card.desc }}</p>
      <h3>Meaning</h3>
      <p>Up: {{ card.meaning_up }}</p>
      <p>Reversed: {{ card.meaning_rev }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "CardDetail",
  props: {
    card: Object,
  },
  computed: {
    imageSrc() {
      const imagePath = require("@/assets/images/" +
        this.card.name_short +
        ".jpg");
      return `background-image: url("${imagePath}")`;
    },
  },
};
</script>

<style scoped>
article {
  width: 100%;
  display: flex;
}

article {
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

figure {
  background-size: 210%;
  background-position: 2% 10%;
  background-repeat: no-repeat;
  border: #000000 solid 20px;
  width: calc(80vmin / 1.5);
  height: 80vmin;
  margin: 1em;
  position: relative;
}

figure::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: #e7e7e7 solid 2px;
}

h1,
h3,
p {
  text-align: center;
  margin: 0.5em;
  max-width: 700px;
}

/* Tablets */
@media (min-width: 481px) {
  figure {
    background-size: 205%;
    background-position: 2% 50%;
    width: calc(60vmin / 1.5);
    height: 60vmin;
  }

  .card-content {
    max-width: 80%;
  }
}

/* Laptops */
@media (min-width: 769px) {
  .card-content {
    max-width: 700px;
    width: 80%;
  }

  figure {
    width: calc(50vmin / 1.45);
    height: 50vmin;
  }
}

/* Desktops */
@media (min-width: 1025px) {
  article {
    flex-direction: row;
    padding: 1em;
  }

  .card-content {
    overflow: scroll;
    height: 50vmin;
    max-height: 50vmin;
    max-width: 80%;
  }

  .modal article .card-content {
    background: rgb(0, 0, 0);
  }

  #random article {
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.2);
    background: linear-gradient(
      305deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    max-width: 60%;
  }

  figure {
    background-size: cover;
    background-position: 5% 50%;
    margin: 0 0.8em 0 0;
    width: calc(50vmin / 1.4);
    height: 50vmin;
  }

  h1,
  h3,
  p {
    text-align: start;
  }
}
</style>