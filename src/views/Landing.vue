<template>
  <div>
    <navbar />
    <hero />
    <shorten />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Shorten from '../components/Shorten.vue'
export default {
  components: { 
    Navbar,
    Hero,
    Shorten,
  },
  
}
</script>

<style scoped lang="scss">
  
</style>
