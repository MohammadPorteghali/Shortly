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
  background-color: $very-dark-violet;
  display: flex;

  @include respond(big-phone) {
    padding: 50px 6vw;
    text-align: center;
    flex-direction: column;
  }

  & .logo {
    flex: .6;
  }

  & .links {
    flex: 1;
    color: $gray;
    display: flex;

    @include respond(big-phone) {
      flex-direction: column;
    }

    & ul {

      @include respond(big-phone) {
        margin-top: 30px;
      }
    }

    & li {
      margin: 0 10px 10px;
      font-size: 15px;

      @include respond(big-phone) {
        font-size: 15px;
      }
    }

    & .title {
      color: white !important;
      margin-bottom: 25px;

      @include respond(big-phone) {
      margin-bottom: 20px;
      }
    }
  }

  & .social-media img {
    margin: 0 10px;
    width: 22px;

    @include respond(big-phone) {
      margin-top: 30px;
    }
  }
}
</style>