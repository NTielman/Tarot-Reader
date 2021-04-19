<template>
  <article class="info-container">
    <figure class="card-img shaded" :style="imageSrc"></figure>

    <div class="card-text">
      <h1 class="title">{{ card.name }}</h1>

      <p class="text">Type: {{ card.type }}</p>
      <p v-if="card.suit" class="text">Suit: {{ card.suit }}</p>

      <h3 class="sub-title">Description</h3>
      <p class="text">{{ card.desc }}</p>

      <h3 class="sub-title">Meaning</h3>
      <p class="text">Up: {{ card.meaning_up }}</p>
      <p class="text">Reversed: {{ card.meaning_rev }}</p>
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
/* Container */
.info-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

/* Card image */
.card-img {
  margin: 1em;
  border: #060605 solid 20px;
  width: calc(80vmin / 1.5);
  height: 80vmin;
  position: relative;
  background: no-repeat 2% 10%/210%;
}

.card-img::after {
  content: "";
  border: #e7e7e7 solid 2px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Card text */
.title,
.sub-title,
.text {
  margin: 0.5em;
  max-width: 700px;
  text-align: center;
}

/* Media queries
   ====================================================== */
/* Tablets */
@media (min-width: 481px) {
  .card-img {
    width: calc(60vmin / 1.5);
    height: 60vmin;
    background: 2% 50%/205%;
  }

  .card-text {
    max-width: 80%;
  }
}

/* Laptops */
@media (min-width: 769px) {
  .card-img {
    width: calc(50vmin / 1.45);
    height: 50vmin;
  }

  .card-text {
    max-width: 700px;
    width: 80%;
  }
}

/* Desktops */
@media (min-width: 1025px) {
  .info-container {
    padding: 1em;
    flex-direction: row;
  }

  #random .info-container {
    max-width: 60%;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.2);
    background: linear-gradient(
      305deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .card-img {
    margin: 0 0.8em 0 0;
    width: calc(50vmin / 1.4);
    height: 50vmin;
    background: 5% 50% / cover;
  }

  .card-text {
    max-width: 80%;
    height: 50vmin;
    overflow: scroll;
  }

  .modal .info-container .card-text {
    background: #060605;
  }

  .title,
  .sub-title,
  .text {
    text-align: start;
  }
}
</style>