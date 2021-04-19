<template>
  <main class="random" id="random">
    <CardDetail v-if="card" :card="card" />
    <p v-else class="loading-text">loading card info...</p>
    <Button btnText="Random Card" @btn-click="getRandomCard" />
  </main>
</template>

<script>
import Button from "@/components/Button.vue";
import CardDetail from "@/components/CardDetail.vue";

export default {
  name: "Random",
  data() {
    return {
      card: null,
    };
  },
  components: {
    Button,
    CardDetail,
  },
  methods: {
    getRandomCard() {
      window.location.href = "#random";
      fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1")
        .then((response) => response.json())
        .then((data) => (this.card = data.cards[0]))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1")
      .then((response) => response.json())
      .then((data) => (this.card = data.cards[0]))
      .catch((err) => console.log(err.message));
  },
};
</script>