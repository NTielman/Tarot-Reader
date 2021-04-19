<template>
  <div class="card-list">
    <p v-if="!cards.length" class="placeholder">loading cards</p>
    <CardItem
      v-for="card in sortedCards"
      :cardIsReversible="reversible"
      :key="card.name_short"
      :cardId="card.name_short"
      @card-click="handleCardClick"
    />
  </div>
</template>

<script>
import CardItem from "@/components/CardListItem.vue";
import sorter from "@/assets/sorter.js";

export default {
  name: "CardList",
  props: ["query", "sortParam", "sortDirection", "qty", "reversible"],
  data() {
    return {
      cards: [],
    };
  },
  components: {
    CardItem,
  },
  methods: {
    handleCardClick(id) {
      this.$emit("cardSelected", id);
      this.$emit("openCardModal");
    },
  },
  mounted() {
    fetch(this.query)
      .then((response) => response.json())
      .then((data) => (this.cards = data.cards))
      .catch((err) => console.log(err.message));
  },
  computed: {
    sortedCards() {
      let cards = this.cards.map((card) => card);

      if (this.qty) {
        const deckLength = cards.length;
        const randomNum = Math.floor(Math.random() * (deckLength - this.qty));
        cards = cards.slice(randomNum, randomNum + this.qty);
      }

      if (this.sortParam) {
        cards = sorter(cards, this.sortParam, this.sortDirection);
      }
      return cards;
    },
  },
};
</script>

<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: 1em auto;
  width: 100%;
  justify-content: space-evenly;
  align-content: space-around;
}

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
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: currentColor;
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: 0.25em 0 0 currentColor, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 currentColor, 0.5em 0 0 currentColor;
  }
}
</style>