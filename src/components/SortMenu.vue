<template>
  <div class="sort-container shine">
    <ul class="sort-menu">
      <li>sort by:</li>
      <li
        v-for="param in sortParams"
        :key="param.id"
        @click="handleClick(param.id)"
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
    handleClick(param) {
      this.$emit("sort", param, this.sortUp);
      this.sortUp = !this.sortUp;
    },
  },
};
</script>

<style scoped>
.sort-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  font-family: "Playfair Display", serif;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #060605;
}

li {
  display: inline-block;
  padding: 1em;
  color: #e7e7e7;
  text-align: center;
}

li ~ li {
  cursor: pointer;
}
</style>