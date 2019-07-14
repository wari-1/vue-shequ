<template>
  <div>
    <Header />
    <!-- <router-link to></router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
</style>
