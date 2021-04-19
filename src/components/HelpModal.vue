<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal shaded">
      <i @click="closeModal" class="fas fa-times"></i>

      <h1 class="title">Guide</h1>

      <iframe
        src="https://giphy.com/embed/1bNPrvSM40fsIIi12N"
        width="326"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>

      <ol class="instructions">
        <li>Tap on a card and view it's orientation</li>
        <li>Double-tap to learn what fortunes await you</li>
      </ol>
    </div>
  </div>
</template>


<script>
export default {
  name: "HelpModal",
  methods: {
    closeModal() {
      this.$emit("close-help-modal");
    },
  },
};
</script>


<style scoped>
.modal {
  height: 70%;
}

.title {
  margin: 0.5em;
}

.giphy-embed {
  width: 80%;
}

.instructions {
  margin: 1em;
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Media queries
   ====================================================== */
/* Desktops */
@media (min-width: 1025px) {
  .instructions {
    font-weight: bolder;
  }
}
</style>