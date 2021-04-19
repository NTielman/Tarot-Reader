<template>
  <main>
    <CardList
      :query="randomCards"
      :reversible="true"
      @card-click="getCardDetails"
      @open-card-modal="toggleModal"
    />

    <CardModal
      v-if="showModal"
      @close-card-modal="toggleModal"
      :itemId="selectedCard"
    />

    <HelpModal v-if="showHelp" @close-help-modal="closeHelp" />
  </main>
</template>


<script>
import CardList from "@/components/CardList.vue";
import CardModal from "@/components/CardModal.vue";
import HelpModal from "@/components/HelpModal.vue";

export default {
  name: "Home",
  components: {
    CardList,
    CardModal,
    HelpModal,
  },
  data() {
    return {
      randomCards:
        "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10",
      selectedCard: "",
      showModal: false,
      showHelp: true,
    };
  },
  methods: {
    getCardDetails(id) {
      this.selectedCard = id;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    closeHelp() {
      this.showHelp = false;
    },
  },
};
</script>
