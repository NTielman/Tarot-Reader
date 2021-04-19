<template>
  <button @click="handleClick" class="shine shaded">{{ btnText }}</button>
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
button {
  margin: 1em;
  border: none;
  padding: 1.5em;
  font-family: "Playfair Display", serif;
  color: currentColor;
  background: #060605;
  cursor: pointer;
}

button:focus,
button:active {
  outline: none;
}

/* Media queries
   ====================================================== */
/* Desktops */
@media (min-width: 1025px) {
  button {
    margin: 2.5em;
    padding: 1.5em;
    font-size: 1rem;
  }
}
</style>