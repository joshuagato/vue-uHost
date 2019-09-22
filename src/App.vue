<template>
  <div id="app">

    <Navigation />
    <router-view />

  </div>
</template>

<script>
import Navigation from './components/Home/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #e7f4ff;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin: auto;
  margin-bottom: 1rem;
}
</style>
