<template>
  <main>
    <SortMenu @sort="sortCardList" />

    <CardList
      :query="randomCards"
      :reversible="true"
      :sortable="true"
      :sortParams="sort"
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
import SortMenu from "@/components/SortMenu.vue";
import CardList from "@/components/CardList.vue";
import CardModal from "@/components/CardModal.vue";
import HelpModal from "@/components/HelpModal.vue";

export default {
  name: "Home",
  components: {
    SortMenu,
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
      sort: {
        sortParam: null,
        sortDirection: false,
      },
    };
  },
  methods: {
    getCardDetails(id) {
      this.selectedCard = id;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    sortCardList(param, sortDirection) {
      this.sort.sortParam = param;
      this.sort.sortDirection = sortDirection;
    },
    closeHelp() {
      this.showHelp = false;
    },
  },
};
</script>
