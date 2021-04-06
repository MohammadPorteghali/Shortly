<template>
  <div>
    <navbar />
    <hero />
    <shorten />
    <statistics />
    <boost-links />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Shorten from '../components/Shorten.vue'
import Statistics from '../components/Statistics.vue'
import BoostLinks from '../components/BoostLinks.vue'
export default {
  components: { 
    Navbar,
    Hero,
    Shorten,
    Statistics,
    BoostLinks,
  },
  
}
</script>

<style scoped lang="scss">
  
</style>
