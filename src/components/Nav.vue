<template>
  <div class="nav" id="nav">
    <ul class="main-menu">
      <li><router-link class="shine" to="/">Home</router-link></li>
      <li @mouseenter="showSubMenu" @mouseleave="closeSubMenu">
        <router-link class="shine" :to="{ name: 'Category' }"
          >Categories</router-link
        >
      </li>
      <li>
        <router-link class="shine" :to="{ name: 'Random' }">Random</router-link>
      </li>
    </ul>

    <ul class="sub-menu" ref="subMenu">
      <li v-for="navLink in subNavLinks" :key="navLink.id">
        <router-link
          class="shine"
          :to="{ name: 'CategoryDetail', params: { id: navLink.id } }"
          >{{ navLink.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      subNavLinks: [
        { title: "major arcanas", id: "type=major" },
        { title: "wands", id: "suit=wands" },
        { title: "cups", id: "suit=cups" },
        { title: "swords", id: "suit=swords" },
        { title: "pentacles", id: "suit=pentacles" },
      ],
    };
  },
  methods: {
    showSubMenu() {
      this.$refs.subMenu.classList.add("show");
    },
    closeSubMenu() {
      this.$refs.subMenu.classList.remove("show");
    },
  },
};
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
}

ul {
  display: flex;
  list-style: none;
  /* justify-content: space-between; */
  /* background-color: #060605; */
  /* border-bottom: solid 2px #b1b1b1; */
}

li {
  text-align: center;
  width: 35%;
  background-color: #060605;
}

ul.sub-menu {
  width: 33.5%;
  position: absolute;
  top: 90%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -150%);
  transition: 1s linear;
  z-index: -1;
  color: currentColor;
  overflow: hidden;
}

ul.sub-menu li {
  width: 100%;
}

ul.sub-menu:hover,
ul.sub-menu.show {
  /* transform: translateY(0); */
  transform: translate(-50%, 0);
}

a {
  color: currentColor;
  display: inline-block;
  padding: 1em;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-family: "Playfair Display", serif;
}

#nav a.router-link-exact-active {
  color: #b1b1b1;
}
</style>