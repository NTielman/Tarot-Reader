<template>
  <main>
    <h1>{{ title }}</h1>

    <SortMenu @sort="sortCardList" />

    <CardList
      :key="cardSuit"
      :reversible="false"
      :query="cardSuit"
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
  </main>
</template>


<script>
import SortMenu from "@/components/SortMenu.vue";
import CardList from "@/components/CardList.vue";
import CardModal from "@/components/CardModal.vue";

export default {
  name: "Category",
  components: {
    SortMenu,
    CardList,
    CardModal,
  },
  props: {
    id: String,
  },
  data() {
    return {
      selectedCard: "",
      showModal: false,
      sort: {
        sortParam: null,
        sortDirection: false,
      },
    };
  },
  computed: {
    title() {
      const pageTitle = this.id.split("=")[1]; //'suit=cups' > cups
      let capitalisedTitle = pageTitle[0].toUpperCase() + pageTitle.slice(1); //cups > Cups

      if (capitalisedTitle == "Major") {
        capitalisedTitle = "Major Arcanas";
      }

      return capitalisedTitle;
    },
    cardSuit() {
      return (
        "https://rws-cards-api.herokuapp.com/api/v1/cards/search?" + this.id
      );
    },
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
  },
};
</script>