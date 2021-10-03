<template>
  <div id="nav">
    <Nav></Nav>
  </div>
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue"
export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>

<style>
</style>
