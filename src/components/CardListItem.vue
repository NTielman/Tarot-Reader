<template>
  <div
    class="dynamic-card"
    v-if="cardIsReversible"
    @click="handleClick(cardId)"
    @dblclick="handleDouble(cardId)"
  >
    <input ref="input" type="checkbox" :id="cardId" checked />

    <label :for="cardId">
      <div class="card-back shaded shine">
        <div class="card-front shine" :style="imageSrc"></div>
      </div>
    </label>
  </div>

  <figure
    v-else
    @click="handleClick(cardId)"
    class="static-card shine shaded"
    :style="imageSrc"
  ></figure>
</template>


<script>
export default {
  name: "Card",
  props: {
    cardIsReversible: Boolean,
    cardId: String,
  },
  computed: {
    imageSrc() {
      const imagePath = require("@/assets/images/" + this.cardId + ".jpg");
      return `background-image: url("${imagePath}")`;
    },
  },
  methods: {
    handleClick(id) {
      if (this.cardIsReversible) {
        this.$refs.input.checked = false;
        this.$refs.input.disabled = true;
      } else {
        this.$emit("card-click", id);
      }
    },
    handleDouble(id) {
      this.$emit("card-click", id);
    },
  },
};
</script>


<style scoped>
/* Reversible card */
.dynamic-card {
  margin: 0.8em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  display: none;
}

label {
  cursor: pointer;
}

.card-back {
  width: calc(45vmin / 1.45);
  height: 45vmin;
  overflow: hidden;
  position: relative;
  transform: rotateY(0deg);
  transition: transform 200ms linear;
}

input:checked + label .card-back {
  transform: rotateY(180deg);
}

input:disabled + label .card-back {
  border: #060605 solid 10px;
}

.card-front {
  width: 100%;
  height: 100%;
  border: #e7e7e7 solid 2px;
  transform: rotate(180deg);
  background-size: 200%;
  background-repeat: no-repeat;
  opacity: 1;
  transition: opacity 1ms linear 100ms;
  animation: reverseCard 1s steps(2, jump-none) infinite;
  animation-play-state: paused;
}

input:checked + label .card-front {
  opacity: 0;
  animation-play-state: running;
}

@keyframes reverseCard {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

/* Static card */
.static-card {
  margin: 0.8em 0;
  border: #060605 solid 10px;
  width: calc(45vmin / 1.45);
  height: 45vmin;
  position: relative;
  background: no-repeat 2% 100%/200%;
  cursor: pointer;
}

.static-card::after {
  content: "";
  border: #e7e7e7 solid 2px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Media queries
   ====================================================== */
/* Tablets */
@media (min-width: 481px) {
  .dynamic-card label .card-front,
  .static-card {
    background-size: 205%;
  }

  @keyframes reverseCard {
    0% {
      background-position: 2% 90%;
    }
    100% {
      background-position: 98% 20%;
    }
  }
}

/* Laptops */
@media (min-width: 769px) {
  .dynamic-card label .card-back,
  .static-card {
    margin: 1em;
    width: calc(30vmin / 1.4);
    height: 30vmin;
  }
}
</style>