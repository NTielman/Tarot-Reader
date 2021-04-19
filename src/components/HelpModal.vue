<template>
  <div class="backdrop" @click.self="handleClick">
    <div class="modal">
      <i @click="handleClick" class="fas fa-times"></i>
      <h1 class="title">Guide</h1>
      <iframe
        src="https://giphy.com/embed/1bNPrvSM40fsIIi12N"
        width="326"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <ol class="steps">
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
    handleClick() {
      this.$emit("closeHelpModal");
    },
  },
};
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.modal {
  width: 80%;
  height: 70%;
  padding: 1em;
  margin: 6em auto;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    305deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: default;
}

.modal i {
  color: #b1b1b1;
  text-align: center;
  width: 10%;
  cursor: pointer;
}

.title {
  margin: 0.5em;
}

.giphy-embed {
  max-width: 85%;
  min-width: 50%;
  width: 80%;
}

.steps {
  margin: 1em;
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Desktops */
@media (min-width: 1025px) {
  .steps {
    font-weight: bolder;
  }

  .modal {
    max-width: 60%;
  }
}
</style>