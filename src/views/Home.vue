<template>
  <main class="home">
    <SortMenu @sort="sortCardList" />
    <CardList
      :query="query"
      :reversible="true"
      :sortParam="sortParam"
      :sortDirection="sortDirection"
      @cardSelected="getCardDetails"
      @openCardModal="toggleModal"
    />
    <DetailModal
      v-if="showModal"
      @closeCardModal="toggleModal"
      :itemId="selectedCard"
    />
    <HelpModal v-if="showHelp" @closeHelpModal="closeHelp" />
  </main>
</template>

<script>
import SortMenu from "@/components/SortMenu.vue";
import CardList from "@/components/CardList.vue";
import DetailModal from "@/components/DetailModal.vue";
import HelpModal from "@/components/HelpModal.vue";

export default {
  name: "Home",
  data() {
    return {
      query: "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10",
      selectedCard: "",
      showModal: false,
      showHelp: true,
      sortParam: null,
      sortDirection: false,
    };
  },
  components: {
    SortMenu,
    CardList,
    DetailModal,
    HelpModal,
  },
  methods: {
    getCardDetails(id) {
      this.selectedCard = id;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    sortCardList(param, sortDirection) {
      this.sortParam = param;
      this.sortDirection = sortDirection;
    },
    closeHelp() {
      this.showHelp = false;
    },
  },
};
</script>
