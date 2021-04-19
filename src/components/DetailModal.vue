<template>
  <div class="backdrop" @click.self="handleClick">
    <div v-if="card" class="modal">
      <i @click="handleClick" class="fas fa-times"></i>
      <CardDetail :card="card" />
      <h3>related cards</h3>
      <CardList
        :reversible="false"
        :query="query"
        :qty="relatedCardsQty"
        @cardSelected="getCardDetails"
      />
    </div>

    <div v-else class="modal">
      <i @click="handleClick" class="fas fa-times"></i>
      <p class="placeholder">loading card info</p>
    </div>
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import CardDetail from "@/components/CardDetail.vue";

export default {
  name: "DetailModal",
  props: {
    itemId: String,
  },
  data() {
    return {
      card: null,
      relatedCardsQty: 3,
    };
  },
  components: {
    CardList,
    CardDetail,
  },
  mounted() {
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/" + this.itemId)
      .then((response) => response.json())
      .then((data) => (this.card = data.card))
      .catch((err) => console.log(err.message));
  },
  computed: {
    query() {
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
  methods: {
    handleClick() {
      this.$emit("closeCardModal");
    },
    getCardDetails(id) {
      fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/" + id)
        .then((response) => response.json())
        .then((data) => (this.card = data.card))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.modal {
  width: 80%;
  height: 80%;
  padding: 1em;
  /* border-radius: 1em; */
  margin: 6em auto;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    305deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}

.modal i {
  color: #b1b1b1;
  text-align: center;
  width: 10%;
  cursor: pointer;
}

/* Desktops */
@media (min-width: 1025px) {
  .modal {
    max-width: 60%;
  }
}
</style>