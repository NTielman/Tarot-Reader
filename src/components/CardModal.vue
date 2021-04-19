<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal shaded">
      <i @click="closeModal" class="fas fa-times"></i>

      <p v-show="!card" class="placeholder">loading card info</p>

      <CardInfo v-if="card" :card="card" />

      <h3 v-show="card">related cards</h3>
      <CardList
        v-if="card"
        :reversible="false"
        :query="relatedCards"
        :numOfCards="relatedCardsQty"
        @card-click="getCardInfo"
      />
    </div>
  </div>
</template>


<script>
import CardInfo from "@/components/CardInfo.vue";
import CardList from "@/components/CardList.vue";

export default {
  name: "CardModal",
  components: {
    CardInfo,
    CardList,
  },
  props: {
    itemId: String,
  },
  data() {
    return {
      card: null,
      relatedCardsQty: 3,
    };
  },
  computed: {
    relatedCards() {
      if (this.card && this.card.type == "major") {
        return "https://rws-cards-api.herokuapp.com/api/v1/cards/search?type=major";
      } else if (this.card && this.card.type == "minor") {
        return (
          "https://rws-cards-api.herokuapp.com/api/v1/cards/suits/" +
          this.card.suit
        );
      }
    },
  },
  mounted() {
    this.getCardInfo(this.itemId);
  },
  methods: {
    getCardInfo(id) {
      fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/" + id)
        .then((response) => response.json())
        .then((data) => (this.card = data.card))
        .catch((err) => console.log(err.message));
    },
    closeModal() {
      this.$emit("close-card-modal");
    },
  },
};
</script>