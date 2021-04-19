<template>
  <input
    v-if="cardIsReversible"
    ref="input"
    type="checkbox"
    :id="cardId"
    checked
  />
  <label
    :for="cardId"
    @click="handleClick(cardId)"
    @dblclick="handleDouble(cardId)"
  >
    <div :class="cardIsReversible ? 'card-back shine' : 'static-back'">
      <div
        class="shine"
        :class="cardIsReversible ? 'card-front' : 'static-front'"
        :style="imageSrc"
      ></div>
    </div>
  </label>
</template>

<script>
export default {
  name: "Card",
  emits: ["card-click"],
  props: {
    cardIsReversible: Boolean,
    cardId: String,
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
  computed: {
    imageSrc() {
      const imagePath = require("@/assets/images/" + this.cardId + ".jpg");
      return `background-image: url("${imagePath}")`;
    },
  },
};
</script>

<style scoped>
input {
  display: none;
}

label {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8em 0;
}

.static-back {
  width: calc(45vmin / 1.45);
  height: 45vmin;
  border: #000000 solid 10px;
}

.card-back {
  width: calc(45vmin / 1.45);
  height: 45vmin;
  /* margin: 1em; */
  position: relative;
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
  overflow: hidden;
  transition: transform 200ms linear;
  transform: rotateY(0deg);
}

input:disabled + label .card-back {
  border: #000000 solid 10px;
}

input:checked + label .card-back {
  transform: rotateY(180deg);
}

.static-front {
  width: 100%;
  height: 100%;
  background-size: 200%;
  background-repeat: no-repeat;
  border: #ffffff solid 2px;
}

.card-front {
  background-size: 200%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  opacity: 1;
  border: #ffffff solid 2px;
  transition: opacity 1ms linear 100ms;
  animation: reversibleCard 1s steps(2, jump-none) infinite;
  animation-play-state: paused;
  transform: rotate(180deg);
}

input:checked + label .card-front {
  opacity: 0;
}

input:checked + label .card-front {
  animation-play-state: running;
}

@keyframes reversibleCard {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

/* Tablets */
@media (min-width: 481px) {
  .static-front {
    background-size: 205%;
    background-position: 2% 90%;
  }

  .card-front {
    background-size: 205%;
  }

  @keyframes reversibleCard {
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
  .static-back {
    width: calc(30vmin / 1.4);
    height: 30vmin;
    margin: 0.4em;
  }

  .card-back {
    width: calc(30vmin / 1.4);
    height: 30vmin;
    margin: 1em;
  }
}
</style>