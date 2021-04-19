<template>
  <button @click="handleClick" class="btn shine gold">{{ btnText }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnText: String,
  },
  methods: {
    handleClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
  color: currentColor;
  padding: 1.5em;
  margin: 1em;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  background-color: #060605;
}

.btn:focus,
.btn:active {
  outline: none;
}

/* Desktops */
@media (min-width: 1025px) {
  .btn {
    font-size: 1rem;
    padding: 1.5em;
    margin: 2.5em;
  }
}
</style>