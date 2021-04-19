<template>
  <main class="category-detail">
    <h1>{{ title }}</h1>
    <SortMenu @sort="sortCardList" />
    <CardList
      :key="query"
      :reversible="false"
      :query="query"
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
  </main>
</template>

<script>
import SortMenu from "@/components/SortMenu.vue";
import CardList from "@/components/CardList.vue";
import DetailModal from "@/components/DetailModal.vue";

export default {
  name: "Category",
  data() {
    return {
      selectedCard: "",
      showModal: false,
      sortParam: null,
      sortDirection: false,
    };
  },
  props: {
    id: String,
  },
  components: {
    SortMenu,
    CardList,
    DetailModal,
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
  },
  computed: {
    query() {
      return (
        "https://rws-cards-api.herokuapp.com/api/v1/cards/search?" + this.id
      );
    },
    title() {
      const pageTitle = this.id.split("=")[1]; //'suit=cups' > cups
      let capitalTitle = pageTitle[0].toUpperCase() + pageTitle.slice(1); //cups > Cups
      if (capitalTitle == "Major") {
        capitalTitle = "Major Arcanas";
      }
      return capitalTitle;
    },
  },
};
</script>