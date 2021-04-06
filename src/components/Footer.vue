<template>
  <footer>
    <a class="logo" href="#"><img src="../assets/images/logo-white.svg" alt=""></a>
    <div class="links">
      <ul>
        <li class="title">Features</li>
        <li>Link shorting</li>
        <li>Branded links</li>
        <li>Analytics</li>
      </ul>
      <ul>
        <li class="title">Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul>
        <li class="title">Company</li>
        <li>About</li>
        <li>Our team</li>
        <li>Carrers</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="social-media">
      <img src="@/assets/images/icon-facebook.svg" alt="">
      <img src="@/assets/images/icon-twitter.svg" alt="">
      <img src="@/assets/images/icon-pinterest.svg" alt="">
      <img src="@/assets/images/icon-instagram.svg" alt="">
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 10vw;
  background-color: var(--very-dark-violet);
  display: flex;

  & .logo {
    flex: .6;
  }

  & .links {
    flex: 1;
    color: var(--gray);
    display: flex;

    & li {
      margin: 0 10px 10px;
      font-size: 15px;
    }

    & .title {
      color: white !important;
      margin-bottom: 25px;
    }
  }

  & .social-media img {
    margin: 0 10px;
    width: 22px;
  }
}
</style>