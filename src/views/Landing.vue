<template>
  <div>
    <navbar />
    <hero />
    <statistics />
    <boost-links />
    <footer-component />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Statistics from '../components/Statistics.vue'
import BoostLinks from '../components/BoostLinks.vue'
import FooterComponent from '../components/Footer.vue'
export default {
  components: { 
    Navbar,
    Hero,
    Statistics,
    BoostLinks,
    FooterComponent,
  },
  
}
</script>

<style scoped lang="scss">
  
</style>
