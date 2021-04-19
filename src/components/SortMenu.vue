<template>
  <div class="sort-container shine shaded">
    <ul class="sort-menu">
      <li>sort by:</li>
      <li
        v-for="param in sortParams"
        :key="param.id"
        @click="sortList(param.id)"
      >
        {{ param.title }}
        <i class="fas fa-sort"></i>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "SortMenu",
  data() {
    return {
      sortParams: [
        { title: "name", id: "name" },
        { title: "value", id: "value_int" },
      ],
      sortUp: true,
    };
  },
  methods: {
    sortList(param) {
      this.$emit("sort", param, this.sortUp);
      this.sortUp = !this.sortUp;
    },
  },
};
</script>


<style scoped>
.sort-container {
  margin: 1em;
  width: 100%;
  font-family: "Playfair Display", serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sort-menu {
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #060605;
}

li {
  display: inline-block;
  padding: 1em;
  text-align: center;
}

li ~ li {
  cursor: pointer;
}
</style>