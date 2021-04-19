<template>
  <nav id="nav">
    <ul class="main-menu">
      <li>
        <router-link class="shine" to="/">Home</router-link>
      </li>
      <li @mouseenter="showSubMenu" @mouseleave="closeSubMenu">
        <router-link class="shine" :to="{ name: 'Categories' }"
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
          :to="{ name: 'Category', params: { id: navLink.id } }"
          >{{ navLink.title }}</router-link
        >
      </li>
    </ul>
  </nav>
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
/* Main menu */
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
}

li {
  width: 35%;
  text-align: center;
  background: #060605;
}

/* Sub menu */
ul.sub-menu {
  width: 33.5%;
  overflow: hidden;
  color: currentColor;
  position: absolute;
  z-index: -1;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -150%);
  flex-direction: column;
  align-items: center;
  transition: 1s linear;
}

ul.sub-menu:hover,
ul.sub-menu.show {
  transform: translate(-50%, 0);
}

ul.sub-menu li {
  width: 100%;
}

/* Menu links */
a {
  display: inline-block;
  padding: 1em;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-family: "Playfair Display", serif;
  color: currentColor;
}

#nav a.router-link-exact-active {
  color: #b1b1b1;
}
</style>