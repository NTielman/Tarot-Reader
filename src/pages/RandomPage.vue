<template>
  <main id="random">
    <CardInfo v-if="card" :card="card" />

    <p v-else class="placeholder">loading card info</p>

    <Button btnText="Random Card" @btn-click="getRandomCard" />
  </main>
</template>


<script>
import CardInfo from "@/components/CardInfo.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Random",
  components: {
    Button,
    CardInfo,
  },
  data() {
    return {
      card: null,
    };
  },
  mounted() {
    this.getRandomCard();
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
};
</script>