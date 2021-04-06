<template>
  <div>
    <navbar />
    <hero />
    <shorten />
    <statistics />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Shorten from '../components/Shorten.vue'
import Statistics from '../components/Statistics.vue'
export default {
  components: { 
    Navbar,
    Hero,
    Shorten,
    Statistics,
  },
  
}
</script>

<style scoped lang="scss">
  
</style>
