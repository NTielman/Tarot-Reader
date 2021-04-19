<template>
  <div class="card-list">
    <p v-if="!cards.length" class="placeholder">loading cards</p>

    <CardItem
      v-else
      v-for="card in cardsList"
      :cardIsReversible="reversible"
      :key="card.name_short"
      :cardId="card.name_short"
      @card-click="selectCard"
    />
  </div>
</template>

<script>
import CardItem from "@/components/CardListItem.vue";
import sorter from "@/assets/sorter.js";

export default {
  name: "CardList",
  components: {
    CardItem,
  },
  props: {
    numOfCards: Number,
    query: String,
    reversible: Boolean,
    sortable: Boolean,
    sortParams: Object,
  },
  data() {
    return {
      cards: [],
    };
  },
  computed: {
    cardsList() {
      let cards = this.cards.map((card) => card);

      if (this.numOfCards) {
        const deckLength = cards.length;
        const randomIndex = Math.floor(
          Math.random() * (deckLength - this.numOfCards)
        );
        cards = cards.slice(randomIndex, randomIndex + this.numOfCards);
      }

      if (this.sortable) {
        cards = sorter(
          cards,
          this.sortParams.sortParam,
          this.sortParams.sortDirection
        );
      }

      return cards;
    },
  },
  mounted() {
    fetch(this.query)
      .then((response) => response.json())
      .then((data) => (this.cards = data.cards))
      .catch((err) => console.log(err.message));
  },
  methods: {
    selectCard(id) {
      this.$emit("card-click", id);
      this.$emit("open-card-modal");
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
</style>